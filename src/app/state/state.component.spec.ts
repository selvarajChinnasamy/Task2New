import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { StateComponent } from './state.component';
import {DataServiceService } from '../data-service.service';
import { DistrictComponent } from '../district/district.component';
import { CityComponent } from '../city/city.component';
import { By } from '@angular/platform-browser';
import { empty } from 'rxjs/Observer';

describe('StateComponent', () => {
  let component: StateComponent;
  let fixture: ComponentFixture<StateComponent>;
  let districtcomponent: DistrictComponent;
  let fixture1: ComponentFixture<DistrictComponent>;
  let citycomponent: CityComponent;
  let fixture2: ComponentFixture<CityComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ StateComponent, DistrictComponent, CityComponent ],
      providers: [DataServiceService],
    })
    .compileComponents();
    fixture = TestBed.createComponent(StateComponent);
    component = fixture.componentInstance;
    fixture1 = TestBed.createComponent(DistrictComponent);
    districtcomponent = fixture1.componentInstance;
    fixture2 = TestBed.createComponent(CityComponent);
    citycomponent = fixture2.componentInstance;

    fixture.detectChanges();
    component.ngOnInit();
    districtcomponent.ngOnInit();
    citycomponent.ngOnInit();
  }));

  // it('form invalid when empty', () => {
  //   expect(component.selectForm.valid).toBeTruthy();
  // });

  // it('form invalid when empty', () => {
  //   expect(districtcomponent.districtForm.valid).toBeTruthy();
  // });

  it('State field validity', () => {
    let errors = {};
    let state = component.selectForm.controls['state'];
    state.setValue("TamilNadu");
    errors = state.errors || {};
    expect(component.selectedValue).toBe("TamilNadu");
    fixture.detectChanges();
    let district = districtcomponent.districtForm.controls['district'];
    district.setValue("palani");
    fixture1.detectChanges();
  });

});