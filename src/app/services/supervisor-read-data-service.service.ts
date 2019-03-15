import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SupReadDataServiceService {

  constructor(private http : HttpClient) { }

  
    /*sends get request and returns its response data */ 
    getData(){
        return this
                  .http
                  .get('//localhost:3000/sup/');
      
  }
}
