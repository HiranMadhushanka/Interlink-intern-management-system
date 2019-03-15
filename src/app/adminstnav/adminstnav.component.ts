import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-adminstnav',
  templateUrl: './adminstnav.component.html',
  styleUrls: ['./adminstnav.component.scss']
})
export class AdminstnavComponent implements OnInit {

  type;
  id;
  studentid;
  url="https://www.zustonline.com/images/profile_pic.png";
ifAdmin;
  sidenavWidth = 4;
  constructor(private route:ActivatedRoute) { }
ifSupervisor;
  ngOnInit() {
    
   this.id=localStorage.getItem('dataSource');
   this.type=this.route.snapshot.paramMap.get('type');

  if(this.type=="admin"){
    this.ifAdmin=true;
  }else if(this.type=="supervisor"){
    this.ifSupervisor=true;
  }

  if(localStorage.getItem('url')!=null){
    this.url=localStorage.getItem('url');
  }
   

  }
  increase(){
    this.sidenavWidth = 15;
    console.log("increase sidenav width");
  }
  decrease(){
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }
  
  

}
