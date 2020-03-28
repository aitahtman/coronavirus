import { Injectable, EventEmitter, Output } from '@angular/core';
import { environment } from "../../environments/environment";
import * as mapboxgl from "mapbox-gl"
import { StoreService } from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class CartoService {
  map: mapboxgl.Map;
  evtMapIsReady = new EventEmitter();
  constructor(public store: StoreService) {
    mapboxgl.accessToken = environment.mapbox.accessToken

  }

  buildMap() {
    const that = this
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/aitahtman/ck6975yua1zb81imow9xarbld',
      zoom: 2,
      center: [4, 35],
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    // map is ready
    this.map.on('load', () => {
      console.log('Map is ready')
      that.evtMapIsReady.emit(true);

    });

    // toggle cursor on coronavirus source
    this.map.on('mouseenter', 'coronavirus', function () {
      that.map.getCanvas().style.cursor = 'pointer';
    });

    this.map.on('mouseleave', 'coronavirus', function () {
      that.map.getCanvas().style.cursor = '';
    });

    // click evt

    this.map.on('click', 'coronavirus', function (e) {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const props = e.features[0].properties
      // console.log(e.features[0].properties)
      const title = props.province ? `<h5> ${props.country} | ${props.province} </h5>` : `<h5> ${props.country} </h5>`
      const description = `
      ${title}
      <p class="confirmed-text"> <b> confirmed cases </b> : ${props.confirmed} </p>
      <p class="deaths-text"> <b> Reported deaths </b> : ${props.deaths} </p>
      `
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(that.map);
    });
  }

  addGeoJsonSource(sourceName, geojson) {
    // console.log(geojson)
    this.map.addSource(sourceName, geojson)
    this.map.addLayer({
      id: sourceName,
      type: 'circle',
      source: sourceName,
      paint: {
        "circle-radius": ["case",
          ["<=", ["to-number", ["get", "confirmed"]], 10], 5,
          ["<=", ["to-number", ["get", "confirmed"]], 100], 8,
          [">=", ["to-number", ["get", "confirmed"]], 1000], 30,
          [">=", ["to-number", ["get", "confirmed"]], 100], 20,
          ["<=", ["to-number", ["get", "confirmed"]], 500], 25,
          0.2
        ],
        "circle-opacity": ["case",
          ["<=", ["to-number", ["get", "deaths"]], 10], 0.4,
          [">=", ["to-number", ["get", "deaths"]], 2500], 1,
          [">=", ["to-number", ["get", "deaths"]], 1000], 0.9,
          [">=", ["to-number", ["get", "deaths"]], 100], 0.7,
          ["<=", ["to-number", ["get", "deaths"]], 100], 0.5,
          0.2
        ],
        "circle-color": "#E8231D",
        "circle-stroke-width": 0.1,
        "circle-stroke-color": 'black'
      }
    })
  }

  resizeMap() {
    this.map.resize()
  }

}
