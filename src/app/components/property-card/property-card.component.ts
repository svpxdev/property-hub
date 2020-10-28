import { Component, Input, OnInit } from '@angular/core';
import { PropType } from "./propType.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})



export class PropertyCardComponent implements OnInit {
  
  propsList: PropType;
  listing: any ;
  id: string;
  list_key: string;


  
 

  constructor(private http: HttpClient, public location: Location, public router: Router) { 
    // this.http.get("https://propertyhub-293821.firebaseio.com/props.json")
    // .subscribe((response) => {
    //   // console.log(response);
    //   let breakList = {...response}
    //   let breakList_array = {...breakList};
    //   this.listing =breakList_array;
    // })
  }

  ngOnInit(): void {

    this.http.get("https://propertyhub-293821.firebaseio.com/props.json")
    .subscribe((response) => {
      // console.log(response);
      let breakList = {...response}
      let breakList_array = {...breakList};
      this.listing =breakList_array;
    })

  }

  onDelete(event){
    event.preventDefault();
    // console.log(this.list_key);
  }

  setData(){
    this.router.navigateByUrl("/refresh", {skipLocationChange:true})
    .then(()=>{
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

}
