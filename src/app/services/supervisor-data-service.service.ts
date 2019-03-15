import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {student} from './ReadDataModel'
import {NgForm} from '@angular/forms';
import { studentdetails } from './StudentDataModel';
import {BehaviorSubject} from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';
@Injectable({
  providedIn: 'root'
})
export class SupervisorDataServiceService {
  
  hashpassword:string
  constructor(private http : HttpClient) { }

  
  
    /*sends get request and returns its response data */ 
    sendData(formdata:NgForm){
      this.hashpassword=Md5.hashStr(formdata.value.password.toString()).toString();
    
        return this
                  .http
                  .post('//localhost:3000/sup',
                  {
                    
                    "text" : formdata.value.fName,
                    "text1" : formdata.value.lName,
                    "text2" : formdata.value.contact,
                    "text3" : this.hashpassword,
                    "text4"  : formdata.value.email,
                    
                    
                    
                    
                    
                    
                 }
                 
                ); 
  }
}
