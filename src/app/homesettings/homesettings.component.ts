import { Component, OnInit } from '@angular/core';
import {PersonalService} from '../services/personal-details-service.service';
import {student} from '../services/ReadDataModel'
import {studentdetails} from '../services/StudentDataModel';
import { NgForm } from '@angular/forms';
import {ReadDataServiceService} from '../services/read-data-service.service';
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';
import { SendDataServiceService } from '../services/send-data-service.service';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-homesettings',
  templateUrl: './homesettings.component.html',
  styleUrls: ['./homesettings.component.css']
})
export class HomesettingsComponent implements OnInit {
  constructor(private readService:ReadDataServiceService,private saveData:SendDataServiceService,private getData:ReadOneDataServiceService,private route:ActivatedRoute,private router:Router) { }
  Student:studentdetails[];
id :String;
student:studentdetails;



  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);

   
  
    this.getData.getData(this.id)
        .subscribe((data: studentdetails) => {
          this.student = data;
        });
    
  }
  // projectCount:number;
  // otherProjectName:string;
  // otherProjects=[];
  // technologys=[];
  // technologyName:string;
   
  // Student:student;
  //   ngOnInit() {
  //     this.projectCount=this.otherProjects.length;
  //     this.personalService.currentMessage
  //   .subscribe(message =>
  //      this.Student = message
      
  //     );
  //     console.log(this.Student.fName);
  //   }
 
  // addProject(){
  //   this.otherProjects.push(this.otherProjectName);
  //   this.otherProjectName='';
  //   this.projectCount=this.otherProjects.length;
  // }

  // addTechnology(){
  //   this.technologys.push(this.technologyName);
  //   this.technologyName='';
    
  // }
  onSubmit(formdata:NgForm){
   
   // console.log(formdata.value.node);
   this.router.navigate([this.id,'editskils']);
  }

}
