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
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 2
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    // map is ready
    this.map.on('load', () => {
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
      console.log(e.features[0].properties)
      var description = `
      <h4> ${props.country}</h4>
      <p> <b> Confirmed cases </b> : ${props.confirmedCases} </p>
      <p> <b> Reported deaths </b> : ${props.reportedDeaths} </p>
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
          ["==", ["get", "country"], "China"], 70,
          ["*", ["get", "confirmedCases"], 2]
        ],
        "circle-opacity": 0.7,
        "circle-color": "red",
      }
    })
  }

  resizeMap() {
    this.map.resize()
  }

}
