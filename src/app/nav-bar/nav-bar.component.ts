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
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
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
    
  
    
    this.current=localStorage.getItem('dataSource');
    this.states=localStorage.getItem('loged');
    this.type=localStorage.getItem('type');
    this.fName=localStorage.getItem('fName');
      this.lName=localStorage.getItem('lName');
      var storageRef=storage().ref(this.current);
    storageRef.getDownloadURL().then(url=> {
      localStorage.setItem('url',url.toString());
    })
    if(this.states=="true"){
      this.ifLoged=true;
      if(this.type=="admin"){
        this.ifAdmin=true;
        var ref = firebase.database().ref("count").once('value').then( val => {
          return val.child('count').val();
        });
        ref.then( value => {
          this.count = value;
        });
    
        var ref2 = firebase.database().ref('count').on( 'child_changed' , snap  => {
          this.count = snap.val();
          
        })

        var ref3 = firebase.database().ref("pending").once('value').then( val => {
          return val.child('pending').val();
        });
        ref3.then( value => {
          this.pending = value;
        });
    
        var ref4 = firebase.database().ref('pending').on( 'child_changed' , snap  => {
          this.pending = snap.val();
          
        })

        var ref5 = firebase.database().ref("tech").once('value').then( val => {
          return val.child('tech').val();
        });
        ref5.then( value => {
          this.techcount = value;
        });
    
        var ref6 = firebase.database().ref('tech').on( 'child_changed' , snap  => {
          this.techcount = snap.val();
          
        })

        if(this.count!=0){
            this.ifHaveNotifi=true;
        }
      }
    }else{ 
      this.ifLoged=false;
    }
      console.log(this.current);
    
    this.readService.getData()
      .subscribe((data: studentdetails[]) => {
        this.students = data;
      })
    //this.students[2].email;
  }


  onClickMe()  {

    
    
   
this.hashpassword=Md5.hashStr(this.formPassword).toString();

    this.readService.getData()
      .subscribe((data: studentdetails[]) => {
        this.students = data;

        this.supreadService.getData().
        subscribe((data:supervisordetails[])=>{
          this.supervisor=data;

          var count;
          var count2;
          if(this.formEmail=='admin@gmail.com'){
            count = 1;
            if(this.formPassword=='admin'){
              this.modalclose="modal";
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
         if (this.formEmail == this.students[i].email) {
            count = 1;
            this.id = this.students[i].id;
            this.saveDta.changeMessage(this.id);

            console.log(this.students[i].password);
            if (this.hashpassword == this.students[i].password) {
              this.modalclose="modal";
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
          if (this.formEmail == this.supervisor[i].email) {
             count = 1;
             this.id = this.supervisor[i].id;
             console.log(this.id);
             this.saveDta.changeMessage(this.id);
 
             
             if (this.hashpassword == this.supervisor[i].password) {
              this.modalclose="modal";
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
          this.modalclose="modal";
          //this.router.navigate(['/login']);
        }



        });

      });

    //console.log(this.students[1].email);

  }

  logout(){
    localStorage.setItem('loged',"false");
  }
  Info(){
    this.toasterService.Info("Not a user!");
  }
  Warning(){
    this.toasterService.Warning("Invalid password!");
  }

  myFunc(){
    
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['intro']);
    

  }

  clear(){
    var ref2=firebase.database().ref('count').set({
      count:0
    });
    var ref2=firebase.database().ref('tech').set({
      tech:0
    });
    var ref2=firebase.database().ref('pending').set({
      pending:0
    });
  }
}


