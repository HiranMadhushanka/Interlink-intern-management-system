import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as emailjs  from '../../assets/js/email.min.js'
@Component({
  selector: 'app-supstnav',
  templateUrl: './supstnav.component.html',
  styleUrls: ['./supstnav.component.scss']
})
export class SupstnavComponent implements OnInit {
  type;
  id;
  studentid;
  url="https://www.zustonline.com/images/profile_pic.png";

  sidenavWidth = 4;
  constructor(
   
  ) { }

  ngOnInit() {
    var config = {
      apiKey: "AIzaSyC8VdhBJ8JrRQkGOx08Tw3rLBHkWy7IlYA",
      authDomain: "ndyearproject16.firebaseapp.com",
      databaseURL: "https://ndyearproject16.firebaseio.com",
      projectId: "ndyearproject16",
      storageBucket: "ndyearproject16.appspot.com",
      messagingSenderId: "483511651851"
    };
    firebase.initializeApp(config);
      emailjs.init("user_CEwgxO7dKQqmuB3HTkdai");
  //  this.id=localStorage.getItem('dataSource');
  // this.type=localStorage.getItem('type');
  // this.studentid=localStorage.getItem('stid');
  // if(localStorage.getItem('url')!=null){
  //   this.url=localStorage.getItem('url');
  // }
  var template_params = {
    "reply_to": "hasangalakdinu@gmail.com",
    "from_name": "hiranmadhushanka123@gmail.com",
    "to_name": "ruwanmadusanka32@gmail.com",
    "message_html": "Hi ruwan"
 }
 
 var service_id = "gmail";
 var template_id = "template_rhQqTsfL";
 emailjs.send(service_id, template_id, template_params);
   


 }
  
  


}
