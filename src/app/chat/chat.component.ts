import { Component, OnInit } from '@angular/core';
import {ReadDataServiceService} from '../services/read-data-service.service';
import {studentdetails} from '../services/StudentDataModel';
import { Router ,ActivatedRoute} from '@angular/router';
import {DeleteDataServiceService} from '../services/delete-data-service.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private readData:ReadDataServiceService,private deletedata:DeleteDataServiceService, private router:Router,private route:ActivatedRoute) { }
  students:studentdetails[];
  student:studentdetails;
  senderId;
  ngOnInit() {
    this.readData.getData()
    .subscribe((data:studentdetails[])=>{
      this.students=data;
this.senderId=this.route.snapshot.paramMap.get('id');
      //console.log(this.students[5].email);
    }
       
    );
  }

  onsubmit(id:String){
    this.router.navigate([this.senderId,'chat',id,'file']);
  }

}
