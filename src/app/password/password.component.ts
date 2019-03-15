import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ReadDataServiceService } from '../services/read-data-service.service';
import {ToastrService} from '../toastr.service';
import { Router } from '@angular/router';
import { studentdetails } from '../services/StudentDataModel';
import * as emailjs  from '../../assets/js/email.min.js'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor(private readService: ReadDataServiceService, private router: Router,private toasterService:ToastrService) { }
  students: studentdetails[];
  count;
  ngOnInit() {
    emailjs.init("user_CEwgxO7dKQqmuB3HTkdai");
  }

  checkEmail(formdata:NgForm){
    this.readService.getData()
    .subscribe((data: studentdetails[]) => {
      this.students = data;
      console.log(formdata.value.email);
      for (var i = 0; i < this.students.length; i++) {
        if (formdata.value.email == this.students[i].email) {
           this.count = 1;


           var template_params = {
            "reply_to": this.students[i].email,
            "from_name": "hiranmadhushanka123@gmail.com",
            "to_name": this.students[i].email,
            "message_html": this.students[i].password
         }
         
         var service_id = "gmail";
         var template_id = "password_reset";
         emailjs.send(service_id, template_id, template_params);
         this.Success();
          this.router.navigate(['student',this.students[i].id,'ResetPassword']);
        }
      }
      if(this.count!=1){
        this.Info();
      }
    })
  //this.students[2].email;

  }

  
Info(){
    this.toasterService.Info("Not a user!");
  }

  Success() {
    this.toasterService.Success("Password key send! Check your emails");
  }
}
