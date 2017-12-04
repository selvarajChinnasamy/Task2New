import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  states=[];
  selectForm: FormGroup;
  selectedValue:string;
  constructor(private dataservice:DataServiceService,private fb: FormBuilder) { }
  
  buildForm() {
    this.selectForm = this.fb.group({
      state: ['', Validators.compose([
        Validators.required
      ])],
    });
    this.selectForm.controls['state'].valueChanges.subscribe((value) => {
      console.log(value);
      this.selectedValue=value;
    });
  }

  ngOnInit() {
    this.states=this.dataservice.states;
    this.buildForm();
  }
 
}
