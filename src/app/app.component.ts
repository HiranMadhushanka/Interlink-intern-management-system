import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReadDataServiceService } from './services/read-data-service.service';
import { studentdetails } from './services/StudentDataModel';
import { SendDataServiceService } from './services/send-data-service.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   title = 'Project';
//   id: String;
//   students: studentdetails[];
//   constructor(private readService: ReadDataServiceService, private sendData: SendDataServiceService, private router: Router) {
//   }

// }

export class AppComponent implements OnInit {
isLoged=false;
    title = 'Project';
  private id: String;
  students: studentdetails[];

  isAdmin;
  isSupervisor;
  isStudent;
  isadst;
  issupst;
  private type;

  constructor(private readService: ReadDataServiceService, private sendData: SendDataServiceService, private router: Router,private route:ActivatedRoute) {
  }
//   myStyle: object = {};
//   myParams: object = {};
//   width: number = 100;
//   height: number = 100;

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
   

 
    if(localStorage.getItem('loged')=="true"){
        this.isLoged=true;
    }

    if(localStorage.getItem('type')=="admin"){
     
      
        this.isAdmin=true;
     
  }
  if(localStorage.getItem('type')=="student"){
      this.isStudent=true;
  }



  if(localStorage.getItem('type')=="supervisor"){
    this.isSupervisor=true;
    
}

if(localStorage.getItem('type')=="student"){
  this.isStudent=true;
}


  
    
//       this.myStyle = {

//           'position': 'fixed',
//           'width': '100%',
//           'height': '100%',
//           'z-index': -1,
//           'top': 0,
//           'left': 0,
//           'right': 0,
//           'bottom': 0,
//       };
// this.myParams={
  
// };
//   this.myParams = {
//           particles: {
//               number: {
//                   value: 400,
//               },
//               color: {
//                   value: '#aaaaaa'
//               },
//               shape: {
//                   type: 'triangle',
//               },
//       }
//   };
  }
 
}