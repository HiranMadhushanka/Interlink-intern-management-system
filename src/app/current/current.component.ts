import { Component, OnInit } from '@angular/core';
import {ReadDataServiceService} from '../services/read-data-service.service';
import {studentdetails} from '../services/StudentDataModel';
import {SendDataServiceService} from '../services/send-data-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor( private readService: ReadDataServiceService,private sendData:SendDataServiceService,private router:Router) {
  }
  count;
  id:String;
  students:studentdetails[];
  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
    this.readService.getData()
    .subscribe((data:studentdetails[])=>{
        this.students=data;
        for(var i=0;i<this.students.length;i++){
            if(formdata.value.email==this.students[i].email){
                this.id=this.students[i].id;
               // this.sendData.changeMessage(this.id);
                this.router.navigate(['admin',this.id,'myprofile']);
                this.count=1;
            }
            
        }
        if(this.count!=1){
            alert("Student not found!");
        }
    });
}

}
