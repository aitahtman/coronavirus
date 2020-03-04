import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { StoreService } from './store.service';
import Countries from '../../assets/countries.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  csvData: any[] = [];
  formatedData = {};
  @Output() evtDataIsReady = new EventEmitter();
  constructor(private http: HttpClient,
    public store: StoreService) {

  }

  readCSV() {
    this.http.get(environment.dataUrl)
      .subscribe(
        data => this.extractData(data),
        err => {
          console.log(err)
        }
      );
  }

  // create feature from json object  [needs long lat fields]
  makeFeature(json) {
    return {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [json.long, json.lat]
      },
      'properties': {
        ...json
      }
    }
  }

  // makes geojson format from json array
  makeGeojson(json) {
    return {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': json.current.map(o => this.makeFeature(o))
      }
    }
  }


  private extractData(res) {
    // looping over res to generate the geojson
    const keys = Object.keys(res)
    for (const key of keys) {
      let geojson = this.makeGeojson(res[key])
      this.store.dataset.formatedData[key]=geojson

    }
    this.evtDataIsReady.emit(true)
    console.log(this.store.dataset.formatedData)
  }

  getData() {
    this.http.get(`${environment.dataUrl}getData`).subscribe(
      data => this.extractData(data),
      err => {
        console.log(err)
        this.evtDataIsReady.emit(false)
      }
    )
  }


}
