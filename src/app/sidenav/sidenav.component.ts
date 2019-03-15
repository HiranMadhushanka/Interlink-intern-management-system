import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {userRoles} from '../services/UserRoleModle'
import{supervisordetails} from '../services/SupervisorDataMode'
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';
import {storage} from 'firebase';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  type;
  id;
  url="https://www.zustonline.com/images/profile_pic.png";
  userroles:userRoles;
  sidenavWidth = 4;
  constructor(private router : Router,private getData:ReadOneDataServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=localStorage.getItem('dataSource');
    var storageRef=storage().ref(this.id);
    storageRef.getDownloadURL().then(url=> {
      
      localStorage.setItem('url',url.toString());
    })
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
