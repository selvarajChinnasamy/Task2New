import { Component, OnInit,Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  @Input() state:string;
constructor(private dataservice:DataServiceService, private fb: FormBuilder){}
districts:Array<string>=[];
selectedValue:any;
districtForm: FormGroup;
buildForm() {
  this.districtForm = this.fb.group({
    district: ['', Validators.compose([
      Validators.required
    ])],
  });
  this.districtForm.controls['district'].valueChanges.subscribe((value) => {
    console.log(value);
    this.selectedValue=value;
  });
}

 ngOnInit(){
   this.buildForm();
 }
 ngOnChanges(changes: SimpleChanges) {
  const state: SimpleChange = changes.state;
  console.log('prev value: ', state.previousValue);
  console.log('got name: ', state.currentValue);
  this.districts=this.dataservice.getDistrict(state.currentValue);
  console.log(this.districts);
  this.selectedValue='';
}
  }

