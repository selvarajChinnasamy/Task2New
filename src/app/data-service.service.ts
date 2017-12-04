import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  constructor() { }
  tamilnadu=['palani','erode','chennai'];
  kerala=['kottayam','kochi'];
  kottayam=['kottayam','Karukachal'];
  palani=['dindigul','palani'];
  erode=['sathy','Dharapuram'];
  chennai=['chennai-west','chennai-east'];
  kochi=['kochi-central','kochi'];
  states=['TamilNadu','Kerala']

  getDistrict(name:string){
 if(name=='TamilNadu'){
   return this.tamilnadu;
 }
 else if(name=='Kerala'){
  return this.kerala;
 }
  }
  getCity(name:string){
    if(name=='palani'){
      return this.palani;
    }
    else if(name=='kottayam'){
     return this.kottayam;
    }else if(name=='erode'){
      return this.erode;
     }else if(name=='chennai'){
      return this.chennai;
     }else if(name=='kochi'){
      return this.kochi;
     }
     }
}
