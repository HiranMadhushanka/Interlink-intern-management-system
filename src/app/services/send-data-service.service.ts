import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {student} from '../services/ReadDataModel'
import {NgForm} from '@angular/forms';
import { studentdetails } from './StudentDataModel';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SendDataServiceService {
  id:String;
  private messageSource = new BehaviorSubject(this.id);
  currentMessage = this.messageSource.asObservable();
  constructor(private http : HttpClient) { }

   changeMessage(message: any) {
    this.messageSource.next(message)
  }
  
    /*sends get request and returns its response data */ 
    sendData(formdata:NgForm, students:student){
   
    
        return this
                  .http
                  .post('//localhost:3000/signup',
                  {
                    "text"  : students.email,
                    "text2" : students.fName,
                    "text3" : students.lName,
                    "text4" : students.contact,
                    "text5" : students.password,
                    "text6"  : formdata.value.line1,
                    "text7" : formdata.value.line2,
                    "text8" : formdata.value.line3,
                    "text9" : formdata.value.institute,
                    "text10" : formdata.value.github,
                    "text11"  : formdata.value.linkedin,
                    "text12" : formdata.value.facebook,
                    "text13" : formdata.value.achievements,
                    "text14" : formdata.value.other,
                    "text15" : formdata.value.institute1,
                    

                    
                    
                    
                    
                    
                 }
                 
                ); 
  }


  sendfiles(link:String, id:String,filename:String){
   
    
    return this
              .http
              .post('//localhost:3000/files',
              {
                "text"  : id,
                "text1" : link,
                "text2" : filename
    
             }
             ); 
}

sendPending(tech:String, id:String,name:String){
   
    
  return this
            .http
            .post('//localhost:3000/pending',
            {
              "text"  : id,
              "text1" : tech,
              "text2" : name
  
           }
           ); 
}

sendAprroved(tech:String, id:String,name:String){
   
    
  return this
            .http
            .post('//localhost:3000/approve',
            {
              "text"  : id,
              "text1" : tech,
              "text2" : name
              
  
           }
           ); 
}
}
