import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import * as mapboxgl from "mapbox-gl"

@Injectable({
  providedIn: 'root'
})
export class CartoService {

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken

  }

  buildMap() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom:2
    });
  }
}
