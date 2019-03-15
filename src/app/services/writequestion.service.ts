import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WritequestionService {

  constructor(private http : HttpClient) { }

  sendData(formdata:NgForm,name:String){
    var today = new Date().toString();
 var datecode= Date.parse(today);
 return this
               .http
               .post('//localhost:3000/question',
               {
                 
                 "text" : name,
                 "text1" : today,
                 "text2" : formdata.value.content,
                 "text3" : datecode
                 
                       
              }
              
             ); 
}
}
