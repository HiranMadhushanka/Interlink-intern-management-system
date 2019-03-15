import {PersonalService} from '../services/personal-details-service.service'
import { Component, OnInit,AfterViewInit,ElementRef,ViewChild  } from '@angular/core';
import { ReadDataServiceService } from '../services/read-data-service.service';
import { studentdetails } from '../services/StudentDataModel2';
import { Router,ActivatedRoute } from '@angular/router';
import { DeleteDataServiceService } from '../services/delete-data-service.service';
import {ReadOneDataServiceService} from '../services/read-one-data-service.service'
import { SendDataServiceService} from '../services/send-data-service.service'
import * as emailjs  from '../../assets/js/email.min.js'
import * as firebase from 'firebase';
import { ToastrService } from '../toastr.service';
@Component({
  selector: 'app-pending-student',
  templateUrl: './pending-student.component.html',
  styleUrls: ['./pending-student.component.scss']
})
export class PendingStudentComponent implements OnInit {
  constructor(private readData: ReadDataServiceService,private toasterService: ToastrService, private deletedata: DeleteDataServiceService, private router: Router,private route: ActivatedRoute,private getdata:ReadOneDataServiceService,private sendData:PersonalService) { }
  students: studentdetails[];
  student: studentdetails;
  id;
  type;
  ifAdmin;
  url="http://rakcollege.agiuae.com/wp-content/uploads/2015/07/gent-300x300.png";
count;
pendingcount;
ifHaveNotifi
  ngOnInit() {
   
    this.ifHaveNotifi=true;
    this.count=this.count-this.pendingcount
    this.clear();
    emailjs.init("user_CEwgxO7dKQqmuB3HTkdai");
    this.id=localStorage.getItem('dataSource');
    this.type=this.route.snapshot.paramMap.get('type');
    this.readData.getPendingStudent()
      .subscribe((data: studentdetails[]) => {
        this.students = data;
        //console.log(this.students[5].email);
      }

      );
//  var ref2 = firebase.database().ref('count').on( 'child_changed' , snap  => {
//       this.count = snap.val();
      
//     })
//     var ref5= firebase.database().ref('pending').on( 'child_changed' , snap  => {
//       this.pendingcount = snap.val();
      
//     })

  if(this.type=="admin"){
      this.ifAdmin=true;
  }
    
  }
  onsubmit(id: String) {
    this.getdata.getPendingStudent(id).subscribe((data:studentdetails)=>{
        this.student=data;
        this.sendData.sendapprovestu(this.student,id).
        subscribe(res=>{
          var template_params = {
            "reply_to": this.student.email,
            "from_name": "hiranmadhushanka123@gmail.com",
            "to_name": this.student.email,
            "message_html": ""
         }
         
         var service_id = "gmail";
         var template_id = "template_rhQqTsfL";
         emailjs.send(service_id, template_id, template_params);
        
        
        this.deletedata.deletePendingStudent(id).subscribe(res=>{
          emailjs.send(service_id, template_id, template_params);

          
          this.ngOnInit();
          this.Success();
         
        })
          console.log(res);
          
        });
    })
  

  }
  Success() {
    this.toasterService.Success("User Approved");
  }
  Warning() {
    this.toasterService.Warning("User Rejected");
  }

  ondelete(id: String) {
    this.deletedata.deletePendingStudent(id)
      .subscribe(res => {
       

        this.ngOnInit();
        this.Warning();
      });






  }
  clear(){
    var ref2=firebase.database().ref('count').set({
      count:0
    });
   
    var ref2=firebase.database().ref('pending').set({
      pending:0
    });
  }
 

}
