import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from '../services/ReadDataModel';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';
import {studentdetails} from '../services/StudentDataModel2'
@Injectable({
  providedIn: 'root'
})

export class PersonalService {
  hashpassword:string
  a: student;
  students: student;
  private messageSource = new BehaviorSubject(this.a);
  currentMessage = this.messageSource.asObservable();

  public Student;
  constructor(private http: HttpClient) { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  /*sends get request and returns its response data */
  sendData(formdata: NgForm) {
    this.currentMessage
      .subscribe(message => this.students = message);
      console.log(Md5.hashStr('lakd')) ;
      this.hashpassword=Md5.hashStr(this.students.password.toString()).toString();
  
    return this
      .http
      .post('//localhost:3000/signup',
        {
          "text": this.students.email,
          "text2": this.students.fName,
          "text3": this.students.lName,
          "text4": this.students.contact,
          "text5": this.hashpassword,
          "text6": formdata.value.line1,
          "text7": formdata.value.line2,
          "text8": formdata.value.line3,
          "text9": formdata.value.institute1,
          "text10": formdata.value.github,
          "text11": formdata.value.linkedin,
          "text12": formdata.value.facebook,
          "text13": "no achievements",
          "text14": "no qualifications",
          "text16": "no duration",
          "text17": formdata.value.sDate,
          "text18": formdata.value.endDate
          // "text18":"skill 1",
          // "text19":"0",
          // "text20":"skill 2",
          // "text21":"0",
          // "text22":"skill 3",
          // "text23":"0",
          // "text24":"skill 4",
          // "text25":"0",
          // "text26":"skill 5",
          // "text27":"0",
     
          //  "text18" : formdata.value.inst
          //"text18" : formdata.value.sDate.month,
          // "text19" : formdata.value.sDate.year,
        }

      );

  }

  sendapprovestu(student:studentdetails,id:String) {
    
    return this
      .http
      .post('//localhost:3000/approvestu',
        {
          "text": id,
          "text1": student.email,
          "text2": student.fname,
          "text3": student.lname,
          "text4": student.contact,
          "text5": student.password,
          "text6": student.address.line1,
          "text7": student.address.line2,
          "text8": student.address.line3,
          "text9": student.institute1,
          "text10": student.github,
          "text11": student.linkedin,
          "text12": student.facebook,
          "text13": student.other,
          "text14": student.qulifications,
          "text16": student.duration,
          "text17":student.sDate,
          "text18": student.endDate
          // "text18":"skill 1",
          // "text19":"0",
          // "text20":"skill 2",
          // "text21":"0",
          // "text22":"skill 3",
          // "text23":"0",
          // "text24":"skill 4",
          // "text25":"0",
          // "text26":"skill 5",
          // "text27":"0",
     
          //  "text18" : formdata.value.inst
          //"text18" : formdata.value.sDate.month,
          // "text19" : formdata.value.sDate.year,
        }

      );

  }
  getData() {
    return this.Student;
  }
}
