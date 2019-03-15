import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }
  sendData(formdata:NgForm,studentid:String){

 return this
               .http
               .post('//localhost:3000/todo',
               {
                 
                 "text" : studentid,
                 "text2" : formdata.value.descrip,
                 "text3" : "todo"

                       
              }
              
             ); 
}
getData(){
  return this
                .http
                .get('//localhost:3000/todo/');
}
updateData(content,id,studentid,status) {

 // this.hashpassword=Md5.hashStr(formdata.value.password.toString()).toString();
  //this.student=student;
  return this
    .http
    .put('//localhost:3000/todo/' + id,
      {

        "text" : studentid,
        "text2" : content,
        "text3" : status
        
      }

    );
}
}
