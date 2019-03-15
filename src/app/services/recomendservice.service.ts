import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecomendserviceService {

  constructor(private http : HttpClient) { }
  sendData(formdata:NgForm,studentid:String,supName:String){
    var today = new Date().toString();
 var datecode= Date.parse(today);
 return this
               .http
               .post('//localhost:3000/recommendation',
               {
                 
                 "text" : studentid,
                 "text1" : today,
                 "text2" : formdata.value.descrip,
                 "text3" : datecode,
                 "text4" : supName
                       
              }
              
             ); 
}

getData(){
  return this
                .http
                .get('//localhost:3000/recommendation/');
}
}
