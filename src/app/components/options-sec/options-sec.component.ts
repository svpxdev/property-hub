import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'options-sec',
  templateUrl: './options-sec.component.html',
  styleUrls: ['./options-sec.component.css']
})
export class OptionsSecComponent implements OnInit {

  @Input('prop_id') ids: string;
  @Input() newData: ()=>void;

  constructor(private http: HttpClient, private location: Location, private router: Router) { }

  ngOnInit(): void {
  }
  
  onDelete(event){
    event.preventDefault();
    if(confirm("Are you sure you want to delete?")){

      this.http.delete("https://propertyhub-293821.firebaseio.com/props/"+this.ids+".json")
      .subscribe((res)=>{
        console.log(res);
      })
      // console.log("Deleted" +this.ids);
      this.router.navigateByUrl("/refresh", {skipLocationChange:true})
      .then(()=>{
        this.router.navigate([decodeURI(this.location.path())]);
      });
      // this.newData();
      // this.ngOnInit();
  
    }else{
      console.log("Nothing");

    }
  }
}
