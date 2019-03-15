import { WritenoticeService } from './../services/writenotice.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../toastr.service';


import { studentdetails } from './../services/StudentDataModel';
import {ReadDataServiceService} from '../services/read-data-service.service';
import { SendDataServiceService } from '../services/send-data-service.service';
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';
import {ActivatedRoute,Router} from '@angular/router'
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-put-notice',
  templateUrl: './put-notice.component.html',
  styleUrls: ['./put-notice.component.scss']
})
export class PutNoticeComponent implements OnInit {
  id :String;
  student:studentdetails;
  name:String;

  constructor(private readService:ReadDataServiceService,private saveData:SendDataServiceService,private getData:ReadOneDataServiceService,private route:ActivatedRoute,private router:Router,private write1: WritenoticeService, private toasterService: ToastrService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.name=localStorage.getItem('fName')+" "+localStorage.getItem('lName');

  }
  onSubmit(formdata:NgForm){
    
 

   this.write1.sendData(formdata,this.name).subscribe(res=>{
    this.router.navigate(['noticeboard']);
  });


  this.Success();

  window.location.reload();
  }
  Success() {
    this.toasterService.Success("Notice Published Successfully");
  }

}


