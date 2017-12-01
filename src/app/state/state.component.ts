import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  states=[]
  selectedValue:any;
  constructor(private dataservice:DataServiceService) { }
  
  ngOnInit() {
    this.states=this.dataservice.states;
  }
 
}
