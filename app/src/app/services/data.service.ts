import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { StoreService } from './store.service';
import Countries from '../../assets/countries.json';
import {min,max}  from 'lodash'
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
        'features': json.map(o => this.makeFeature(o))
      }
    }
  }


  private extractData(res) {
    // looping over res to generate the geojson
    if (res) {
      // console.log(res.current)
      this.store.dataset.data = res
      let geojson = this.makeGeojson(res.current)
      this.store.dataset.formatedData = geojson
      this.store.dataset.totalCases = res.current.map(o => parseInt(o.Confirmed)).reduce((acc, curr) => acc + curr)
      this.store.dataset.totalDeaths = res.current.map(o => parseInt(o.Deaths)).reduce((acc, curr) => acc + curr)
      this.store.dataset.fatalityRate =
        Math.round(((this.store.dataset.totalDeaths / this.store.dataset.totalCases * 100) + Number.EPSILON) * 100) / 100

      this.store.dataset.totalRecovered = res.current.map(o => parseInt(o.Recovered)).reduce((acc, curr) => acc + curr)
      this.evtDataIsReady.emit(true)

      // const datesDatasetas = res.current.map(o => o.date)
      const datesDataset = res.current.map(o => new Date(o.date))
      // console.log([... new Set(datesDatasetas)])
      this.store.dataset.lastUpdate =max(datesDataset)
    }
    // console.log(this.store.dataset.formatedData)
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
