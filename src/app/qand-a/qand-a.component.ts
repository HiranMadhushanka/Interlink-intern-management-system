import { WritequestionService } from './../services/writequestion.service';
import { Component, OnInit } from '@angular/core';

import { studentdetails } from './../services/StudentDataModel';
import {ReadDataServiceService} from '../services/read-data-service.service';
import { SendDataServiceService } from '../services/send-data-service.service';
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';
import {ActivatedRoute,Router} from '@angular/router'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-qand-a',
  templateUrl: './qand-a.component.html',
  styleUrls: ['./qand-a.component.scss']
})
export class QandAComponent implements OnInit {
  id :String;
  student:studentdetails;
  name:String;

  constructor(private readService:ReadDataServiceService,private saveData:SendDataServiceService,private getData:ReadOneDataServiceService,private route:ActivatedRoute,private router:Router,private write1: WritequestionService) { }

  ngOnInit() {
    // this.id=this.route.snapshot.paramMap.get('id');
    // this.getData.getData(this.id)
    // .subscribe((data: studentdetails) => {
    //   this.student = data;
    //   this.name=this.student.fname+" "+this.student.lname
    
    // });
    this.id=localStorage.getItem('dataSource');
    this.name=localStorage.getItem('fName')+" "+localStorage.getItem('lName')
  }

  onSubmit(formdata:NgForm){
    
    console.log("ebuwa"+formdata.value.content)
  //   var today = new Date().toString();
  //  var datecode= Date.parse(today);
  //   console.log(today)

   this.write1.sendData(formdata,this.name).subscribe(res=>{
    this.router.navigate(['queAndAns']);
  });
  window.location.reload();
  }

}
