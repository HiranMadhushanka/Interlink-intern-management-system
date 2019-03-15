import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {storage} from 'firebase';
import {NgForm} from '@angular/forms';
import {SendDataServiceService} from '../services/send-data-service.service'
import {ReadDataServiceService} from '../services/read-data-service.service'
import {Router,ActivatedRoute} from  '@angular/router'
import {tech} from '../services/techModel'
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
count=0;
id;
techcount;
techno:tech[];
approved:tech[];
myapproved=new Array();
pendingtech=new Array();
name;

  constructor(private send:SendDataServiceService,private get:ReadDataServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.count;
   this.name=localStorage.getItem('fName')+" "+localStorage.getItem('lName')
    var ref = firebase.database().ref("count").once('value').then( val => {
      return val.child('count').val();
    });
    ref.then( value => {
      this.count = value;
    });
    var ref3 = firebase.database().ref("tech").once('value').then( val => {
      return val.child('tech').val();
    });
    ref3.then( value => {
      this.techcount = value;
    });
    this.get.getPending().
    subscribe((data:tech[])=>{
        this.techno=data;
        console.log(this.techno[0].id);
        for(var i=0;i<this.techno.length;i++){
          if(this.techno[i].studentid==this.id){
            // console.log(this.skills[i]);
          length=this.pendingtech.push(this.techno[i]);
          
             
          }
        }

        

    });
    this.get.getApproved().
        subscribe((data:tech[])=>{
          this.approved=data;
          for(var i=0;i<this.approved.length;i++){
            if(this.approved[i].studentid==this.id){
              // console.log(this.skills[i]);
            length=this.myapproved.push(this.approved[i]);
            
               
            }
          }
        });

    

    

    
   
  }

onSubmit(formdata:NgForm){
  var ref = firebase.database().ref("count").once('value').then( val => {
    return val.child('count').val();
  });
  ref.then( value => {
    this.count = value;
  });
 
  var ref2 = firebase.database().ref("tech").once('value').then( val => {
    return val.child('tech').val();
  });
  ref2.then( value => {
    this.techcount = value;
  });
  console.log(this.id);
  this.send.sendPending(formdata.value.institute1,this.id,this.name)
  .subscribe(res=>{
    this.get.getPending().
    subscribe((data:tech[])=>{
        this.techno=data;
        console.log(this.techno[0].id);
        var ref2=firebase.database().ref('count').set({
          count:this.count+1
        });
        var ref2=firebase.database().ref('tech').set({
          tech:this.techcount+1
        });
        
        this.pendingtech=[];
        this.myapproved=[];
        this.ngOnInit();
        

    });
  
  });
  

  
}



}
