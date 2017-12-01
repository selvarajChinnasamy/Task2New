import { Component, OnInit,Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  @Input() state:string;
constructor(private dataservice:DataServiceService){}
districts:Array<string>=['dindigul','kerala'];
 ngOnInit(){}
 ngOnChanges(changes: SimpleChanges) {
  const state: SimpleChange = changes.state;
  console.log('prev value: ', state.previousValue);
  console.log('got name: ', state.currentValue);
  this.districts=this.dataservice.getDistrict(state.currentValue);
}
  }

