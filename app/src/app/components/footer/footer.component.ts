import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  media;
  yearCopyright;
  constructor() { }

  ngOnInit() {
    this.media = environment.media
      this.yearCopyright = (new Date()).getFullYear()
  }

}
