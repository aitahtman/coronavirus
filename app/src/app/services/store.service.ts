import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }


  dataset: any = {
    'countryData': [],
    'data': {},
    'formatedData': [],
    'totalCases': undefined,
    'totalDeaths': undefined,
    'fatalityRate': undefined,
    'lastUpdate': undefined,
    'sheets': ['confirmed', 'deaths']
  };

  ready: any = {
    'data': undefined,
    'map': undefined
  };
}
