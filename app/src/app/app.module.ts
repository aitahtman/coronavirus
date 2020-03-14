import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule,GridModule } from '@angular/flex-layout';

import { MapComponent } from './components/map/map.component';
import { InfoComponent } from './components/info/info.component';
import { MatProgressBarModule, MatCardModule } from '@angular/material/';
import { CountUpModule } from 'countup.js-angular2';
import { EvolutionGraphComponent } from './components/evolution-graph/evolution-graph.component';
import { ChartsModule } from 'ng2-charts';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InfoComponent,
    EvolutionGraphComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    GridModule,
    MatProgressBarModule,
    CountUpModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
