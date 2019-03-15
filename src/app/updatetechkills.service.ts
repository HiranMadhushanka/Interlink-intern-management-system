import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UpdatetechkillsService {
  
  id: String;
  rating : String;
  selectedSkill :String;
  studentid: String;
  constructor(private http: HttpClient) { }
  sendData(id: String,rating: String, skill1:String, studeid:String) {
    console.log("Hi")
    this.id = id;
    this.rating=rating;
    this.selectedSkill=skill1;
    this.studentid=studeid;
    return this
    .http
    .put('http://localhost:3000/techskills/'+this.id,
      {
         "text": this.studentid,
         "text1":this.selectedSkill,
         "text2": this.rating
      
      

      }

    );
  }
  sendDatanontech(id: String,rating: String, skill1:String, studeid:String){
    console.log("Hi")
    this.id = id;
    this.rating=rating;
    this.selectedSkill=skill1;
    this.studentid=studeid;
    return this
    .http
    .put('http://localhost:3000/skills/'+this.id,
      {
         "text": this.studentid,
         "text1":this.selectedSkill,
         "text2": this.rating
      
      

      }
      );
  }

 
}
