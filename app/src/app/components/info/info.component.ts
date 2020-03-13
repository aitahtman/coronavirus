import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public store: StoreService) { }

  counterOptionsDecimals = { 'decimalPlaces': 2 }
  counterOptions = { 'separator': ' ' }
  ngOnInit() {
  }

}
