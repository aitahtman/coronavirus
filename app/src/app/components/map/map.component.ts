import { Component, OnInit } from '@angular/core';
import { CartoService } from "../../services/carto.service";
import { DataService } from "../../services/data.service";
import { StoreService } from "../../services/store.service";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  isLoading: boolean;

  constructor(
    private carto: CartoService,
    private data: DataService,
    public store: StoreService
  ) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.data.readCSV()
    this.carto.buildMap()
    this.data.evtDataIsReady.subscribe((data) => {
      this.carto.addGeoJsonSource('coronavirus', this.store.dataset.countryData)
      this.carto.resizeMap()
      this.isLoading = false
    })
  }

}
