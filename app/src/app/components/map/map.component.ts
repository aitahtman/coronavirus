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
    this.data.getData()
    // this.data.readCSV()

    this.data.evtDataIsReady.subscribe((data) => {
      this.carto.buildMap()
      this.store.ready.data = true

    })

    this.carto.evtMapIsReady.subscribe((b) => {
      if (this.store.ready.data) {
        this.carto.addGeoJsonSource('coronavirus', this.store.dataset.formatedData)
        this.carto.resizeMap()
        this.isLoading = false
        this.store.ready.map = true
      }


    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.data.evtDataIsReady.unsubscribe()
    this.carto.evtMapIsReady.unsubscribe()
  }

}
