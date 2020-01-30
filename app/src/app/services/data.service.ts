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


  private extractData(res) {
    if (res.status != 200) {
      console.log('ERROR : data loading')
      this.evtDataIsReady.emit(false)
    }
    for (let i = 0; i < res.countryData.length; i++) {
      const countryName = res.countryData[i].country
      const countryEquivalent = Countries.find((o) => { return o.name.toLocaleLowerCase().trim() === countryName.toLocaleLowerCase().trim() })
      res.countryData[i]['coords'] = countryEquivalent.latlng

    }
    this.store.dataset.countryData = res.countryData
    this.store.dataset.totalCases = res.totalCases
    this.store.dataset.totalDeaths = res.totalDeaths
    this.store.dataset.fatalityRate = res.fatalityRate
    this.evtDataIsReady.emit(true)
  }


}
