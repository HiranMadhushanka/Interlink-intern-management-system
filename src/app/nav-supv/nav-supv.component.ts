import { Component, OnInit } from '@angular/core';
import {storage} from 'firebase';
@Component({
  selector: 'app-nav-supv',
  templateUrl: './nav-supv.component.html',
  styleUrls: ['./nav-supv.component.scss']
})
export class NavSupvComponent implements OnInit {
  sidenavWidth = 4;
  id;
  constructor() { }
  url="https://www.zustonline.com/images/profile_pic.png";
  ngOnInit() {
this.id=localStorage.getItem('dataSource');
var storageRef=storage().ref(this.id);
storageRef.getDownloadURL().then(url=> {
  
  localStorage.setItem('url',url.toString());
})
if(localStorage.getItem('url')!=null){
  this.url=localStorage.getItem('url');
}


  }
  increase(){
    this.sidenavWidth = 15;
    console.log("increase sidenav width");
  }
  decrease(){
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }


}
