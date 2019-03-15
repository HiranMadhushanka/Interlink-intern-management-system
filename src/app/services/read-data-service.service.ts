import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ReadDataServiceService {

  constructor(private http : HttpClient) { }

  
    /*sends get request and returns its response data */ 
    getData(){
        return this
                  .http
                  .get('//localhost:3000/approvestu/');
      
  }

  getFiles(){
    return this
              .http
              .get('//localhost:3000/files/');
  }

  getPending(){
    return this
              .http
              .get('//localhost:3000/pending');
  }
  getApproved(){
    return this
              .http
              .get('//localhost:3000/approve');
  }

  getPendingStudent(){
    return this
              .http
              .get('//localhost:3000/signup');
  }
}
