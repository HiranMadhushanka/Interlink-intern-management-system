import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {ReadDataServiceService} from '../services/read-data-service.service'
import {ReadOneDataServiceService} from '../services/read-one-data-service.service'
import {DeleteDataServiceService} from '../services/delete-data-service.service'
import {tech} from '../services/techModel'
import { SendDataServiceService } from '../services/send-data-service.service';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-notifi',
  templateUrl: './notifi.component.html',
  styleUrls: ['./notifi.component.scss']
})
export class NotifiComponent implements OnInit {

  constructor(private get:ReadOneDataServiceService,private list:ReadDataServiceService,private send:SendDataServiceService,private delet:DeleteDataServiceService) { }
techno:tech[];
atech:tech;
count ;
techcount;
ifHaveNotifi;
name;
  ngOnInit() {
   
    this.name=localStorage.getItem('fName')+" "+localStorage.getItem('lName')

   this.clear();
      
    
      this.ifHaveNotifi=true;

      this.list.getPending()
      .subscribe((data:tech[])=>{
        this.techno=data;
      });
  }

  

  Approve(id:String){
    this.get.getPendingTech(id).
    subscribe((data:tech)=>{
      
        this.atech=data;
        this.send.sendAprroved(this.atech.technology,this.atech.studentid,this.name).
        subscribe(res=>{
          this.delet.deletePending(id).
          subscribe(res=>{

            this.list.getPending()
            .subscribe((data:tech[])=>{
              this.techno=data;
              
            });
          });
          
        });
    });
    
    
    

    
  }
  
  
  Delete(id:String){
    this.delet.deletePending(id).
    subscribe(res=>{
      this.list.getPending()
      .subscribe((data:tech[])=>{
        this.techno=data;
        
      });
      
    });
  }

  clear(){
    var ref2=firebase.database().ref('count').set({
      count:0
    });
   
    var ref2=firebase.database().ref('tech').set({
      tech:0
    });
  }

}
