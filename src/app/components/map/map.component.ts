import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom: number;
  center: google.maps.LatLngLiteral
  markers: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position)=>{
      this.zoom = 12;
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })

    this.http.get("https://propertyhub-293821.firebaseio.com/props.json")
    .subscribe((response) => {
      // console.log(response);
      let breakList = {...response}
      let breakList_array = {...breakList};
      this.markers = breakList_array;
      console.log(breakList_array);
    })

  }

}
