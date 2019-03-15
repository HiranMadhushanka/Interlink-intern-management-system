import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {userRoles} from '../services/UserRoleModle'
import{supervisordetails} from '../services/SupervisorDataMode'
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  sidenavWidth = 4;
  type;
  id;
  userroles:userRoles;
  constructor(private router : Router,private getData:ReadOneDataServiceService,private route:ActivatedRoute) { }


  ngOnInit() {
    
    this.type=this.route.snapshot.paramMap.get('type');
    this.id=this.route.snapshot.paramMap.get('id');

    this.getData.getRoles(this.type)
    .subscribe((data:userRoles)=>{
        this.userroles=data;
        console.log(this.userroles.current);

     });
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
