import { Component } from '@angular/core';
import { student } from '../services/ReadDataModel'
import { studentdetails } from '../services/StudentDataModel'
import { NgForm } from '@angular/forms';
import { PersonalService } from '../services/personal-details-service.service';
import { Router } from '@angular/router';
import { SendDataServiceService } from '../services/send-data-service.service';
import {SupervisorDataServiceService} from '../services/supervisor-data-service.service'
import { ReadDataServiceService } from '../services/read-data-service.service';
import {SupReadDataServiceService} from '../services/supervisor-read-data-service.service'
import { ToastrService } from '../toastr.service';
import {supervisordetails} from '../services/SupervisorDataMode'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {


  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  contactPatttern = "^07+[0-9]{7,7}$";
  // telPattern="^\+[1-9]{1}[0-9]{3,14}$";
  // email:String;
  psPatttern="^[a-z0-9._%+-]{8,8}$";
  message: student;
  Student: studentdetails[];
  email: String;
  supervisor:supervisordetails[];
  constructor(private sendService: SendDataServiceService, private readService: ReadDataServiceService,private SupReadService: SupReadDataServiceService,private SupSendService: SupervisorDataServiceService, private router: Router, private personalService: PersonalService, private toasterService: ToastrService) {
  }


  //ngOnInit(){

  ngOnInit() {
    // this.readService.getData()
    //   .subscribe((data: supervisordetails[]) => {
    //     this.supervisor = data;
    //   })
  }

  onSubmit(formdata: NgForm) {
    this.email = formdata.value.email;
    if (formdata.value.gridRadios == "supervisor") {
        // this.SupSendService.sendData(formdata)
        // .subscribe();

        this.SupReadService.getData()
        .subscribe((data: supervisordetails[]) => {
          this.supervisor = data;
          if (formdata.value.password == formdata.value.cPassword) {
            var count;
            for (var i = 0; i < this.supervisor.length; i++) {
              if (formdata.value.email == this.supervisor[i].email) {
                count = 1;
                // alert("User already exists!");
                this.Error();

              }
            }
            if (count != 1) {
              // alert("User Registered!");
              this.SupSendService.sendData(formdata).
              subscribe();
              this.Success();

              this.router.navigate(['/intro']);
            }
          } else {
            //alert("Password missmatched!");
            this.Warning();
          }
        });
    } else {

      this.message = formdata.value;
      this.email = formdata.value.email;
      this.personalService.changeMessage(this.message);
      this.readService.getData()
        .subscribe((data: studentdetails[]) => {
          this.Student = data;
          if (formdata.value.password == formdata.value.cPassword) {
            var count;
            for (var i = 0; i < this.Student.length; i++) {
              if (formdata.value.email == this.Student[i].email) {
                count = 2;
                // alert("User already exists!");
                this.Error();

              }
            }
            if (count != 2) {
              // alert("User Registered!");
             // this.Success();

              this.router.navigate(['student',this.email,'homepersonal']);
            }
          } else {
            //alert("Password missmatched!");
            this.Warning();
          }
        });


    }
  }

  Success() {
    this.toasterService.Success("User Registerd");
  }
  Warning() {
    this.toasterService.Warning("password mismatch");
  }
  Error() {
    this.toasterService.Error("User already exists!");
  }

}








