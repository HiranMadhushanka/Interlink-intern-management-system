import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http : HttpClient) { }

  sendData(formdata:NgForm,id){
    return this
                  .http
                  .post('//localhost:3000/skills',
                  {
                    
                    "text" : id,
                    "text1" : formdata.value.skillname,
                    "text2" : formdata.value.skillrate
                          
                 }
                 
                ); 
  }
}
