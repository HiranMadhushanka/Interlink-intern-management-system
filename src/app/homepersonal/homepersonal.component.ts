import { Component, OnInit, Input } from '@angular/core';
import { PersonalService } from '../services/personal-details-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { studentdetails } from '../services/StudentDataModel';
import { SendDataServiceService } from '../services/send-data-service.service';
import { student } from '../services/ReadDataModel';
import { ToastrService } from '../toastr.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-homepersonal',
  templateUrl: './homepersonal.component.html',
  styleUrls: ['./homepersonal.component.css']
})
export class HomepersonalComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  // telPattern="^\+[1-9]{1}[0-9]{3,14}$";

  Student: student;

  institutes = ["UOM", "pera", "japura", "kalniya"];
pending;
count;
tech;
  constructor(private personalService: PersonalService, private router: Router, private sendData: SendDataServiceService, private toasterService: ToastrService) {
  }



  ngOnInit() {
    var ref = firebase.database().ref("pending").once('value').then( val => {
      return val.child('pending').val();
    });
    ref.then( value => {
      this.pending = value;
    });
    var ref2 = firebase.database().ref("count").once('value').then( val => {
      return val.child('count').val();
    });
    ref2.then( value => {
      this.count = value;
    });
    var ref3 = firebase.database().ref("tech").once('value').then( val => {
      return val.child('tech').val();
    });
    ref3.then( value => {
      this.tech = value;
    });
    // this.personalService.getData()
    //    .subscribe((data : student )=> {
    //         this.Student= data;
    //   });
    // this.personalService.currentMessage.subscribe(message => this.Student = message);
    //   console.log(this.Student.email);
  }


  onSubmit(formdata: NgForm) {
    this.personalService.currentMessage
      .subscribe(message =>
        this.Student = message

      );


    this.personalService.sendData(formdata)
      .subscribe(res=>
        {
          var ref = firebase.database().ref("pending").once('value').then( val => {
            return val.child('pending').val();
          });
          ref.then( value => {
            this.pending = value;
          });
          var ref2 = firebase.database().ref("count").once('value').then( val => {
            return val.child('count').val();
          });
          ref2.then( value => {
            this.count = value;
          });
          var ref3=firebase.database().ref('count').set({
            count:this.count+1
          });
          var ref4=firebase.database().ref('pending').set({
            pending:this.pending+1
          });
         
          this.Success();
          this.router.navigate(['/intro']);
        });
//console.log(formdata.value.institute1);
    // alert("Personal data saved!");
    

    // this.personalService.getData()
    //   .subscribe(response => this.Student = response);

    //   console.log(this.Student.contact);







  }

  Success() {
    this.toasterService.Success("Wait until admin's approval");
  }

}
