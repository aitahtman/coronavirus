import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }


  dataset: any = {
    'countryData':[],
    'totalCases': undefined,
    'totalDeaths': undefined,
    'fatalityRate':undefined
  }
}
