import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class ReadOneDataServiceService {
  id: String
  type:String
  constructor(private http: HttpClient) { }


  /*sends get request and returns its response data */
  getData(id: String) {
    this.id = id;
    return this
      .http
      .get('//localhost:3000/approvestu/' + this.id);


  }

  getRoles(type:String){
    this.type=type;
    return this
      .http
      .get('//localhost:3000/roles/' + this.type);
  }

  getSupervisor(id:String){
    this.id=id;
    return this
      .http
      .get('//localhost:3000/sup/' + this.id);
  }

  getPendingTech(id:String){
    this.id=id;
    return this
      .http
      .get('//localhost:3000/pending/' + this.id);
  }

  getApprovedTech(id:String){
    this.id=id;
    return this
      .http
      .get('//localhost:3000/approve/' + this.id);
  }

  getPendingStudent(id: String) {
    this.id = id;
    return this
      .http
      .get('//localhost:3000/signup/' + this.id);


  }

}
