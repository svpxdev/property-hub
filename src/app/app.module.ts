import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListbodyComponent } from './components/listbody/listbody.component';
import { MapComponent } from './components/map/map.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { SecNavbarComponent } from './components/sec-navbar/sec-navbar.component';
import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { OptionsSecComponent } from './components/options-sec/options-sec.component';
import { DataServiceService } from './data-service.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { RefreshComponent } from './refresh/refresh.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListbodyComponent,
    MapComponent,
    PageNotFoundComponent,
    AboutComponent,
    CreateComponent,
    PropertyCardComponent,
    SecNavbarComponent,
    OptionsSecComponent,
    RefreshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GooglePlaceModule,
    GoogleMapsModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
