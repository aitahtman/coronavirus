import { Component, OnInit } from '@angular/core';
import { CartoService } from "../../services/carto.service";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private carto: CartoService) {
  }

  ngOnInit() {
    this.carto.buildMap()
  }

}
