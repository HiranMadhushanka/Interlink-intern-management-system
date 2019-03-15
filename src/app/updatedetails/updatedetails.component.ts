import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UpdateDataServiceService} from '../services/update-data-service.service';
import {ActivatedRoute,Router} from '@angular/router';
import { ReadOneDataServiceService } from "../services/read-one-data-service.service";
import { studentdetails } from './../services/StudentDataModel';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.scss']
})
export class UpdatedetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private read:ReadOneDataServiceService,private update:UpdateDataServiceService,private router:Router) { }
id;
type;
student:studentdetails;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.type=this.route.snapshot.paramMap.get('type');
    this.read.getData(this.id).
    subscribe((data:studentdetails)=>{

    this.student=data;
    
      
    });
  }

  onSubmit(formdata:NgForm){
    console.log(formdata.value);
    this.id=this.route.snapshot.paramMap.get('id');
    this.type=this.route.snapshot.paramMap.get('type');
    console.log(formdata.value);
    this.update.sendData(formdata,this.id)
    .subscribe(res=>{
      localStorage.setItem('fName',formdata.value.fname);
      localStorage.setItem('lName',formdata.value.lname);
      window.location.reload();
      this.router.navigate(['student',this.id,'myprofile']);
      
    });
    
  }

}
