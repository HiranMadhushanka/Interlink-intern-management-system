import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadanswerService {

  constructor(private http : HttpClient) { }
  getData(){
    return this
                  .http
                  .get('//localhost:3000/answer/');
  }
}
