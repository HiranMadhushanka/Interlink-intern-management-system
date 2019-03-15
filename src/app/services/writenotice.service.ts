import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WritenoticeService {

  constructor(private http : HttpClient) { }
   //   var today = new Date().toString();
  //  var datecode= Date.parse(today);
  //   console.log(today)


  sendData(formdata:NgForm,name:String){
       var today = new Date().toString();
    var datecode= Date.parse(today);
    return this
                  .http
                  .post('//localhost:3000/notice',
                  {
                    
                    "text" : name,
                    "text1" : today,
                    "text2" : formdata.value.content,
                    "text3" : datecode,
                    "text4" : formdata.value.location,
                    "text5" : formdata.value.time,
                    "text6" : formdata.value.topic
                          
                 }
                 
                ); 
  }
}
