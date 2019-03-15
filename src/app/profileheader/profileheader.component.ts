import { Component, OnInit } from '@angular/core';
import { HomesettingsComponent } from '../homesettings/homesettings.component';
import {PersonalService} from '../services/personal-details-service.service';
import {student} from '../services/ReadDataModel';
import {ActivatedRoute} from '@angular/router';
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';
import {studentdetails} from '../services/StudentDataModel';
import * as firebase from 'firebase';
import {storage} from 'firebase';
import {userRoles} from '../services/UserRoleModle'
import{supervisordetails} from '../services/SupervisorDataMode'

@Component({
  selector: 'app-profileheader',
  templateUrl: './profileheader.component.html',
  styleUrls: ['./profileheader.component.css']
})
export class ProfileheaderComponent implements OnInit {

  constructor(private personalService:PersonalService,private route:ActivatedRoute,private getData:ReadOneDataServiceService,) { }
Student:student;
selectedFile=null;
student:studentdetails;
supervisor:supervisordetails;
myprofile;
chat;
settings;
activity;
current;
userroles:userRoles;
ifStudent;
ifSupervisor;
ifAdmin;

url="https://cdn.dribbble.com/users/347696/screenshots/2665029/dribbble-progress-bar.gif";
id;
type;

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    
    var storageRef=storage().ref(this.id);
    storageRef.getDownloadURL().then(url=> {
      if(url==null)
{
  this.url="http://rakcollege.agiuae.com/wp-content/uploads/2015/07/gent-300x300.png";
} else{
  this.url=url;
}    
    }).catch(function(error) {
      // Handle any errors
    });


    
  }

  onFileSelected(event){
   
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);
    var storageRef=storage().ref(this.id);
    var metadata={'contentType':this.selectedFile.contentType}
    console.log(storageRef);
    var task:firebase.storage.UploadTask=storageRef.put(this.selectedFile,metadata);
   
    
    task.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      
      storageRef.child(this.id).getDownloadURL().then(url=> {
        
        this.url=url;
      }).catch(function(error) {
        
      });

      task.snapshot.ref.getDownloadURL().then(downloadURL => {
        this.url = downloadURL;
        localStorage.setItem('url',this.url);
        window.location.reload();
        console.log('URL:' + this.url);
      });
    });

  }

  getScreenShot(){
    window.print();
    // html2canvas(document.getElementById('capture')).then((canvas) => {
    //   this.newImg = canvas.toDataURL("image/png")
    // })
  }

}

