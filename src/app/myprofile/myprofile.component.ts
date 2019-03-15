import { UsernameserviceService } from './../services/usernameservice.service';
import { ReadtechskillService } from './../services/readtechskill.service';

import { skillsdetails } from './../services/skillModel';

import { ReadskillService } from './../services/readskill.service';
import { studentdetails } from './../services/StudentDataModel';
import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {ReadDataServiceService} from '../services/read-data-service.service';
import {student} from '../services/ReadDataModel'


import { SendDataServiceService } from '../services/send-data-service.service';
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';
import {ActivatedRoute,Router} from '@angular/router'
import * as jsPDF from 'jspdf';




import {PersonalService} from '../services/personal-details-service.service';


import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})

export class MyProfileComponent implements OnInit {
  @ViewChild('content') content: ElementRef
  constructor(private readService:ReadDataServiceService,private saveData:SendDataServiceService,private getData:ReadOneDataServiceService,private route:ActivatedRoute,private router:Router,private readskill:ReadskillService,private readtechskill:ReadtechskillService,private username:UsernameserviceService) { 

  }
Student:studentdetails[];
id :String;
type;
fname:String;
student:studentdetails;
skills:skillsdetails[];
techskills:skillsdetails[];
studentskills=new Array();
studenttechskills=new Array();
studenttechskills1=new Array();
ifStudent;
 People = [
  {Name: "Name", Surname: "Surname"},
  {Name:"AAA", Surname:"ZZZ"},
  {Name: "Name", Surname: "AAA"}
];

  ngOnInit() {
  

  this.id=this.route.snapshot.paramMap.get('id');

  this.type=this.route.snapshot.paramMap.get('type');
   // this.type=this.route.snapshot.paramMap.get('type');
    if(this.type=='student'){
        this.ifStudent=true;
    }

  this.getData.getData(this.id)
      .subscribe((data: studentdetails) => {
        this.student = data;
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

  onSubmit(){
    this.router.navigate([this.type,this.id,'editdetails']);
  }

  public downloadPDF(){
    let doc =new jsPDF();
    let specialElementHandlers={
      '#editor':function(element,renderer){
          return true;
      }
    };
    let content =this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers':specialElementHandlers
    });

    doc.save('test.pdf');
  }
 

  getScreenShot(){
    window.print();
    // html2canvas(document.getElementById('capture')).then((canvas) => {
    //   this.newImg = canvas.toDataURL("image/png")
    // })
  }
}
