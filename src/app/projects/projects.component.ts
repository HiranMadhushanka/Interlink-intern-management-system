import { Component, OnInit,ElementRef,ViewChild  } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Router,ActivatedRoute } from '@angular/router';
import {studentdetails} from '../services/StudentDataModel'
import {ReadOneDataServiceService} from '../services/read-one-data-service.service'
import {recomendDetails} from '../services/recomendModel'
import {RecomendserviceService} from '../services/recomendservice.service'
import {SkillService} from '../services/skill.service';
import {skillsdetails} from '../services/skillModel'
import {tech} from '../services/techModel'
import {TechskillService} from '../services/techskill.service'
import {ReadDataServiceService} from '../services/read-data-service.service'
import { ReadtechskillService } from './../services/readtechskill.service';
import { ReadskillService } from './../services/readskill.service';
import {techskill} from '../services/techskillmodel'
import html2canvas from 'html2canvas';
declare const $;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  @ViewChild('content') content: ElementRef
student:studentdetails;
id;
recommendationForStud:recomendDetails[];
recommendationForthisStud=new Array();
techno=new Array();
technology;
skills:skillsdetails[];
techskills:skillsdetails[];
studentskills=new Array();
studenttechskills=new Array();
studenttechskills1=new Array();
techskil:techskill
skil:techskill

  constructor(private getStu:ReadOneDataServiceService,private getSkill:SkillService,private gettech:TechskillService,private getRec:RecomendserviceService,private route:ActivatedRoute,private getTech:ReadDataServiceService,private readskill:ReadskillService,private skill:SkillService,private techskill:TechskillService,private readtechskill:ReadtechskillService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.getStu.getData(this.id).subscribe((data:studentdetails)=>{
        this.student=data;
        console.log(this.student)
    })

    this.getRec.getData()
      .subscribe((data:recomendDetails[])=>{
        this.recommendationForStud=data;

        for(var i=0;i<this.recommendationForStud.length;i++){
          if(this.recommendationForStud[i].studentid==this.id){
           
          length=this.recommendationForthisStud.push(this.recommendationForStud[i]);
          console.log(this.recommendationForthisStud)
             
          }
        }
      })

      this.getTech.getApproved().subscribe((data:tech)=>{
        this.technology=data;
        for(var i=0;i<this.technology.length;i++){
          if(this.technology[i].studentid==this.id){
           
          length=this.techno.push(this.technology[i]);
          console.log(this.techno)
             
          }
        }
      })

      this.readskill.getData()
  .subscribe((data: skillsdetails[])=>{
    this.skills=data;
    for(var i=0;i<this.skills.length;i++){
      if(this.skills[i].studentid==this.id){

        if(this.skills[i].skillrate=="1"){
          this.skil=new techskill(this.skills[i].skillname,"Weak");  
        }else if(this.skills[i].skillrate=="2"){
          this.skil=new techskill(this.skills[i].skillname,"Good");
        }else if(this.skills[i].skillrate=="3"){
            this.skil=new techskill(this.skills[i].skillname,"Very Good");
        }else if(this.skills[i].skillrate=="4"){
          this.skil=new techskill(this.skills[i].skillname,"Best");
        }else{
          this.skil=new techskill(this.skills[i].skillname,"Excellent");
        }
        
        
      length=this.studentskills.push(this.skil);
      }
    }
    console.log(this.studentskills[0])
  })

  this.readtechskill.getData()
  .subscribe((data: skillsdetails[])=>{
    this.techskills=data;
    for(var i=0;i<this.techskills.length;i++){
      if(this.techskills[i].studentid==this.id){
        if(this.techskills[i].skillrate=="1"){
          this.techskil=new techskill(this.techskills[i].skillname,"Weak");
          
        }else if(this.techskills[i].skillrate=="2"){
          this.techskil=new techskill(this.techskills[i].skillname,"Good");
        }else if(this.techskills[i].skillrate=="3"){
            this.techskil=new techskill(this.techskills[i].skillname,"Very Good");
        }else if(this.techskills[i].skillrate=="4"){
          this.techskil=new techskill(this.techskills[i].skillname,"Best");
        }else{
          this.techskil=new techskill(this.techskills[i].skillname,"Excellent");
        }
        
        console.log(this.techskil);
      length=this.studenttechskills.push(this.techskil);
      
      
      }
      
    }
    console.log(this.studenttechskills[0].name);
 })



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


}
