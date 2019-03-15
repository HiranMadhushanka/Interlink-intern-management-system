import { Component, OnInit } from '@angular/core';
import {ReadOneDataServiceService}from '../services/read-one-data-service.service'
import {studentdetails} from '../services/StudentDataModel'
import {NgForm} from '@angular/forms'
import {Router,ActivatedRoute} from '@angular/router'
import {UpdateDataServiceService} from '../services/update-data-service.service'
import {ToastrService} from '../toastr.service'
@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.scss']
})
export class ResetpwComponent implements OnInit {

  constructor(private read:ReadOneDataServiceService,private route:ActivatedRoute,private router:Router,private update:UpdateDataServiceService,private toasterService:ToastrService) { }
student:studentdetails;
id;
ifTrue;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');

  }
  checkPw(formdata:NgForm){
    this.read.getData(this.id).
    subscribe((data:studentdetails)=>{
        this.student=data;
        if(formdata.value.pwkey==this.student.password){
            this.ifTrue=true;

        }else{
          this.Info();
        }
    });
  }

  resetPw(formdata:NgForm){
    if(formdata.value.password==formdata.value.rpassword){
      this.update.updatePw(formdata.value.password,this.id).subscribe(res=>{
        this.Success();
          this.router.navigate(['intro']);
      })
    }else{
      this.Warning();
    }
  }


  Info(){
    this.toasterService.Info("Password key Invalid check your emails again!");
  }

  Success() {
    this.toasterService.Success("Password changed!");
  }

  Warning() {
    this.toasterService.Warning("password mismatch");
  }
}


