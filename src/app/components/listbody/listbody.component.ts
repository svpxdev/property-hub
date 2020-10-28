import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-listbody',
  templateUrl: './listbody.component.html',
  styleUrls: ['./listbody.component.css']
})
export class ListbodyComponent implements OnInit {

  constructor(private ds: DataServiceService) { }

  ngOnInit(): void {
    console.log(this.ds.setData());
  }

}
