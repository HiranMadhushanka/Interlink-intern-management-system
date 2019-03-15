import { ReadnoticeService } from './../services/readnotice.service';
import { noticedetails } from './../services/noticeModel';
import { UsernameserviceService } from './../services/usernameservice.service';
import { Component, OnInit } from '@angular/core';


import { skillsdetails } from './../services/skillModel';

import { ReadskillService } from './../services/readskill.service';
import { studentdetails } from './../services/StudentDataModel';

import {ReadDataServiceService} from '../services/read-data-service.service';
import {student} from '../services/ReadDataModel'



import { SendDataServiceService } from '../services/send-data-service.service';
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';
import {ActivatedRoute,Router} from '@angular/router'



@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss']
})
export class NoticeboardComponent implements OnInit {
  id :String;
  
  name:String;
 isStudent;
  notices:noticedetails[];
  noticeBoard=new Array();

  constructor(private noticesDet:ReadnoticeService) {}

  ngOnInit() {

    
if(localStorage.getItem('type')=='student'){
  this.isStudent=true;
}
   
    this.noticesDet.getData()
  .subscribe((data: noticedetails[])=>{
    this.noticeBoard=data;
    this.noticeBoard.sort(this.dynamicSort("code"))
    this.noticeBoard.reverse();
   console.log(this.noticeBoard)
    
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

 
}
