import { TechskillService } from './../services/techskill.service';
import { SkillService } from './../services/skill.service';
import { UpdatetechkillsService } from './../updatetechkills.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import { ReadOneDataServiceService } from "../services/read-one-data-service.service";
import {UpdateDataServiceService} from '../services/update-data-service.service';
import {MatSelectModule} from '@angular/material/select';
import {Location} from '@angular/common';
import { UsernameserviceService } from './../services/usernameservice.service';
import { ReadtechskillService } from './../services/readtechskill.service';
import { StarRatingModule } from 'angular-star-rating';
import { skillsdetails } from './../services/skillModel';

import { ReadskillService } from './../services/readskill.service';
import { studentdetails } from './../services/StudentDataModel';
import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {ReadDataServiceService} from '../services/read-data-service.service';
import {student} from '../services/ReadDataModel'


import { SendDataServiceService } from '../services/send-data-service.service';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from 'angular-star-rating';
import { stringify } from 'querystring';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private readskill:ReadskillService,private read:ReadOneDataServiceService,private update:UpdateDataServiceService ,private router:Router,private skill:SkillService,private techskill:TechskillService,private _location: Location,private username:UsernameserviceService,private readtechskill:ReadtechskillService,private updTech:UpdatetechkillsService) { }
id;
student:studentdetails;
name:any;
type;
ifStudent;
skills:skillsdetails[];
techskills:skillsdetails[];
studentskills=new Array();
studenttechskills=new Array();
studenttechskills1=new Array();

 People = [
  {Name: "Name", Surname: "Surname"},
  {Name:"AAA", Surname:"ZZZ"},
  {Name: "Name", Surname: "AAA"}
];

onClickResult: ClickEvent;
onClickResult1: ClickEvent;

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.type=this.route.snapshot.paramMap.get('type');
   // this.type=this.route.snapshot.paramMap.get('type');
    if(this.type=='student'){
        this.ifStudent=true;
    }
    this.read.getData(this.id).
    subscribe((data:studentdetails)=>{

    this.student=data;
    this.username.setData(this.student.fname.toString());
    console.log(this.username.getData())
      
    });
    this.readskill.getData()
  .subscribe((data: skillsdetails[])=>{
    this.skills=data;
    for(var i=0;i<this.skills.length;i++){
      if(this.skills[i].studentid==this.id){
        // console.log(this.skills[i]);
      length=this.studentskills.push(this.skills[i]);
      
         
      }
    }
    
  })

  this.readtechskill.getData()
  .subscribe((data: skillsdetails[])=>{
    this.techskills=data;
    for(var i=0;i<this.techskills.length;i++){
      if(this.techskills[i].studentid==this.id){
        // console.log(this.techskills[i]);
      length=this.studenttechskills.push(this.techskills[i]);
      
         
      }
    }
    this.studenttechskills.sort(this.dynamicSort("skillname"))
       console.log(this.studenttechskills);
   
  })

 
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
  onSubmit(formdata:NgForm){
    //console.log(this.student.contact);
    this.id=this.route.snapshot.paramMap.get('id');
    this.type=this.route.snapshot.paramMap.get('type');
    console.log(formdata.value);
    this.update.sendData(formdata,this.id)
    .subscribe(res=>{
      this.router.navigate([this.type,this.id,'myprofile']);

    });
    
  }
  onSubmit1(formdata:NgForm){
    this.id=this.route.snapshot.paramMap.get('id');
    this.type=this.route.snapshot.paramMap.get('type');
    this.skill.sendData(formdata,this.id)
    .subscribe(res=>{
      this.studentskills=[];
      this.studenttechskills=[];
      this.ngOnInit();
    });
  }
  onSubmit2(formdata:NgForm){
    this.id=this.route.snapshot.paramMap.get('id');
    this.type=this.route.snapshot.paramMap.get('type');
    this.techskill.sendData(formdata,this.id)
    .subscribe(res=>{
      this.studenttechskills=[];
      this.studentskills=[];
      this.ngOnInit();
    });
  }

  onClick($event: ClickEvent,tech){
    console.log(tech.id)
    console.log('onClick $event: ', $event);
    
    this.onClickResult = $event;
    this.updTech.sendData(tech.id,this.onClickResult.rating.toString(),tech.skillname,this.id).subscribe(() => console.log("rating changed"));
    
  };

  onClick1($event: ClickEvent,nontech){
    console.log(nontech.id)
    console.log('onClick $event: ', $event);
    this.onClickResult1 = $event;
    this.updTech.sendDatanontech(nontech.id,this.onClickResult1.rating.toString(),nontech.skillname,this.id).subscribe(() => console.log("non tech rating changed"));
    
  }
}
