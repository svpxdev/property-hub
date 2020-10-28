import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  listing: any;

  constructor(private http: HttpClient) { }

  setData(){
    this.http.get("https://propertyhub-293821.firebaseio.com/props.json")
    .subscribe((response) => {
      // console.log(response);
      let breakList = {...response}
      let breakList_array = {...breakList};
      this.listing =breakList_array;
    })
    return this.listing;
  }

}
