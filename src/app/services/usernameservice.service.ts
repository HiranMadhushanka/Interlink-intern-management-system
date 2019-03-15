import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameserviceService {
private serviceData:string; 
  constructor() { }
 setData(value: string){
  this.serviceData = value;
 }
 getData():string{
  return this.serviceData;
 }
}
