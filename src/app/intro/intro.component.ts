import { Component, OnInit } from '@angular/core';

import { student } from '../services/ReadDataModel'
import { NgForm } from '@angular/forms';
import { SendDataServiceService } from '../services/send-data-service.service'
import { Router } from '@angular/router';
import { ReadDataServiceService } from '../services/read-data-service.service';
import { studentdetails } from '../services/StudentDataModel';
import {ToastrService} from '../toastr.service';
import {supervisordetails} from '../services/SupervisorDataMode';
import {SupReadDataServiceService} from '../services/supervisor-read-data-service.service'
import {Md5} from 'ts-md5/dist/md5';
import * as firebase from 'firebase';
import {storage} from 'firebase';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  psPatttern="^[a-z0-9._%+-]{8,100}$";
  students: studentdetails[];
  supervisor:supervisordetails[];
  id: String;
  current;
  states;
  ifLoged;
  fName;
  lName;
  formEmail;
  formPassword;
  modalclose:string;
  name:String;
  hashpassword:string;
  type;
  ifAdmin;
  count;
  techcount;
  pending;
  ifHaveNotifi;
  constructor(private readService: ReadDataServiceService,private supreadService: SupReadDataServiceService, private router: Router, private saveDta: SendDataServiceService,private toasterService:ToastrService) {

  }

  ngOnInit() {
   
  }

  onSubmit(formdata:NgForm){
   


      
this.hashpassword=Md5.hashStr(formdata.value.password).toString();

this.readService.getData()
  .subscribe((data: studentdetails[]) => {
    this.students = data;

    this.supreadService.getData().
    subscribe((data:supervisordetails[])=>{
      this.supervisor=data;

      var count;
      var count2;
      if(formdata.value.email=='admin@gmail.com'){
        count = 1;
        if(formdata.value.password=='adminadmin'){
         
          localStorage.setItem('dataSource',"1");
          localStorage.setItem('loged',"true");
          localStorage.setItem('fName',"Admin");
          localStorage.setItem('lName',"");
          localStorage.setItem('type',"admin");
        
          var storageRef=storage().ref("1");
          storageRef.getDownloadURL().then(url=> {
            localStorage.setItem('url',url.toString());
          })
          window.location.reload();
          this.router.navigate(['admin','1','welcome']);
          
        }else{
          this.Warning();
        }
        
      }
    for (var i = 0; i < this.students.length; i++) {
     if (formdata.value.email == this.students[i].email) {
        count = 1;
        this.id = this.students[i].id;
        this.saveDta.changeMessage(this.id);

        console.log(this.students[i].password);
        if (this.hashpassword == this.students[i].password) {
         
          localStorage.setItem('dataSource',this.id.toString());
          localStorage.setItem('loged',"true"); 
          localStorage.setItem('type',"student");
          localStorage.setItem('fName',this.students[i].fname.toString());
          localStorage.setItem('lName',this.students[i].lname.toString());
          var storageRef=storage().ref(this.students[i].id.toString());
          storageRef.getDownloadURL().then(url=> {
            localStorage.setItem('url',url.toString());
          })
          window.location.reload();
          this.router.navigate(['student',this.id,'welcome']);
         
        } else {
          //alert("Invalid password!");
          this.Warning();
        }
      }

    } 

    for (var i = 0; i < this.supervisor.length; i++) {
      if (formdata.value.email == this.supervisor[i].email) {
         count = 1;
         this.id = this.supervisor[i].id;
         console.log(this.id);
         this.saveDta.changeMessage(this.id);

         
         if (this.hashpassword == this.supervisor[i].password) {
         
          localStorage.setItem('dataSource',this.id.toString());
          localStorage.setItem('loged',"true");
          localStorage.setItem('type',"supervisor");
          localStorage.setItem('fName',this.supervisor[i].fname.toString());
          localStorage.setItem('lName',this.supervisor[i].lname.toString());
          localStorage.setItem('stid',this.supervisor[i].id.toString())
         
          window.location.reload();
           this.router.navigate(['supervisor',this.id,'welcome']);
           
         } else {
           //alert("Invalid password!");
           this.Warning();
         }
       }

     } 


    if (count != 1 ) {
      //alert("Not a user!");
      this.Info();
     
      //this.router.navigate(['/login']);
    }



    });

  });


  }

  Info(){
    this.toasterService.Info("Not a user!");
  }
  Warning(){
    this.toasterService.Warning("Invalid password!");
  }

}
