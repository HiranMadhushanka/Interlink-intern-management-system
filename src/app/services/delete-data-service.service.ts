import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DeleteDataServiceService {

  constructor(private http : HttpClient) { }
id;
  
    /*sends get request and returns its response data */ 
    deleteData(id:String){
      this.id=id;
        return this
                  .http
                  .delete('//localhost:3000/approvestu/'+this.id);
      
  }

  deletePending(id:String){
    this.id=id;
      return this
                .http
                .delete('//localhost:3000/pending/'+this.id);
    
}

deletePendingStudent(id:String){
  this.id=id;
    return this
              .http
              .delete('//localhost:3000/signup/'+this.id);
  
}
}
