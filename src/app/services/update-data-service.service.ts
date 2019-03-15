import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './ReadDataModel'
import { NgForm } from '@angular/forms';
import { studentdetails } from './StudentDataModel';
import { BehaviorSubject } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';
@Injectable({
  providedIn: 'root'
})
export class UpdateDataServiceService {
  id: String;
  student: studentdetails;

  hashpassword:string

  constructor(private http: HttpClient) { }


  /*sends get request and returns its response data */
  sendData(formdata: NgForm, id: String) {
    this.id = id;
   // this.hashpassword=Md5.hashStr(formdata.value.password.toString()).toString();
    //this.student=student;
    return this
      .http
      .put('//localhost:3000/approvestu/' + this.id,
        {
          "text": formdata.value.fname,
          "text1": formdata.value.lname,
          "text2": formdata.value.contact,
          // "text3": this.hashpassword,
          "text4": formdata.value.github,
          "text5": formdata.value.linkedin,
          "text6": formdata.value.facebook,
          "text7": "no qualifications"
          // "text8": formdata.value.skill1name,
          // "text9": formdata.value.skill1rate,
          // "text10": formdata.value.skill2name,
          // "text11": formdata.value.skill2rate,
          // "text12": formdata.value.skill3name,
          // "text13": formdata.value.skill3rate,
          // "text14": formdata.value.skill4name,
          // "text15": formdata.value.skill4rate,
          // "text16": formdata.value.skill5name,
          // "text17": formdata.value.skill5rate
          
        }

      );
  }
  updatePw(pw: String,id:String) {
   this.id=id;
    this.hashpassword=Md5.hashStr(pw.toString()).toString();
    //this.student=student;
    return this
      .http
      .put('//localhost:3000/pw/' + this.id,
        {
          "text": this.hashpassword,
         
          
        }

      );
  }
}
