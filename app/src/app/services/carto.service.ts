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
          ["get", "confirmedCases"]
        ],
        "circle-opacity": 0.8,
        "circle-color": "red"
      }
    })
  }


}
