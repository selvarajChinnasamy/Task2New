import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  constructor() { }
  tamilnadu=['palani','erode','chennai'];
  kerala=['kottayam','kochi'];
  kottayam=['kottayam','Karukachal'];
  palani=['dindigul','palani'];
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
    }
     }
}
