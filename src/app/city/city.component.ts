import { Component, OnInit,Input, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() district:string;
  city=[]
  selectedValue:any;
  constructor(private dataservice:DataServiceService) { }
  
  ngOnInit() {
    // this.datas=this.dataservice.states;
  }
  ngOnChanges(changes: SimpleChanges) {
    const district: SimpleChange = changes.district;
    console.log('prev value: ', district.previousValue);
    console.log('got name: ', district.currentValue);
    this.city=this.dataservice.getCity(district.currentValue);
  }
}
