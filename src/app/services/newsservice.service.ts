import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private http:HttpClient) { }
  getNews(urll:string){
    
    return this.http.get(urll);
    
  }
}
