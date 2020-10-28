import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { PropType } from "../property-card/propType.model"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  inputAdd: string;
  inputArea: number;
  inputYear: number;
  inputDes: string;
  inputPosition: google.maps.LatLngLiteral;
  message: string;
  setClasses: any;
  geoData: google.maps.LatLngLiteral;


  propData: PropType;

  options={
    types: [],
    fields: ["ALL"],
    componentRestrictions: { country: 'DE' }
    }

  constructor(private http: HttpClient) { }

  public handleAddressChange(address: any) {
    this.inputAdd = address.formatted_address;
    this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+this.inputAdd+"&key=AIzaSyDew5kKLEn1kNWdJ53ZdJQ7HVM9rZkdSxM")
      .subscribe(res=>{
        this.geoData = res['results'][0].geometry.location;
        // console.log(this.geoData);
      })
}

  formReset(){
    this.inputAdd = "";
    this.inputArea= null;
    this.inputYear= null;
    this.inputDes = "";
  }

  postData(){

    this.propData = {
      address: this.inputAdd,
      area: this.inputArea,
      year: this.inputYear,
      description: this.inputDes,
      position: this.geoData
    }

    this.http.post("https://propertyhub-293821.firebaseio.com/props.json", this.propData)
    .subscribe((res)=>{
      if(res){
        this.message = "Property Added Successfully";
        this.setClasses = {
          "alert": true,
          "alert-success": true,
          "alert-danger": false
        }
        this.formReset();
        
      }
    }, (error)=>{
      console.log(error);
      this.message = "Something went wrong!";
      this.setClasses = {
        "alert": true,
        "alert-success": false,
        "alert-danger": true
      }
      this.formReset();
    });
  }
}
