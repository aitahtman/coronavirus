import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import * as mapboxgl from "mapbox-gl"
import { StoreService } from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class CartoService {
  map: mapboxgl.Map;

  constructor(public store: StoreService) {
    mapboxgl.accessToken = environment.mapbox.accessToken

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 2
    });

    this.map.addControl(new mapboxgl.NavigationControl());

  }
}
