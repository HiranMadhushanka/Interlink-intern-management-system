import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {storage} from 'firebase';
import {ActivatedRoute} from '@angular/router'
import {SendDataServiceService} from '../services/send-data-service.service';
import {ReadDataServiceService} from '../services/read-data-service.service';
import {files} from '../services/files'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  selectedFile=null;
  file:files[];
  fileofstudent=new Array();
  precentage=0;
  id;
  url;
  f=false;
  ifPo;
  constructor(private route:ActivatedRoute,private send:SendDataServiceService,private read:ReadDataServiceService) { }
  
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.read.getFiles().
    subscribe((data: files[])=>{
      this.file=data;
      for(var i=0;i<this.file.length;i++){
        if(this.file[i].studentid==this.id){
          // console.log(this.skills[i]);
        length=this.fileofstudent.push(this.file[i]);
        
           
        }
      }
    }

    );
    // var config = {
    //   apiKey: "AIzaSyC8VdhBJ8JrRQkGOx08Tw3rLBHkWy7IlYA",
    //   authDomain: "ndyearproject16.firebaseapp.com",
    //   databaseURL: "https://ndyearproject16.firebaseio.com",
    //   projectId: "ndyearproject16",
    //   storageBucket: "ndyearproject16.appspot.com",
    //   messagingSenderId: "483511651851"
    // };

    // firebase.initializeApp(config);
    var storageRef=storage().ref(this.id);
    console.log(storageRef);
    storageRef.getDownloadURL().then(url=> {
      
      this.url=url;
      console.log(this.url);
    }).catch(function(error) {
      // Handle any errors
    });
    
    

    

    

    
  }

  onFileSelected(event){
    this.id=this.route.snapshot.paramMap.get('id');
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);
    var storageRef=storage().ref(this.selectedFile.name);
    
    var metadata={'contentType':this.selectedFile.contentType}
    console.log(storageRef);
    var task:firebase.storage.UploadTask=storageRef.put(this.selectedFile,metadata);
    task.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
  this.precentage = (task.snapshot.bytesTransferred / task.snapshot.totalBytes) * 100;
       // console.log(this.precentage);
       if(this.precentage!=0){
         this.ifPo=true;
       }
      },)
    task.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      
      storageRef.getDownloadURL().then(url=> {
        
        this.url=url;
        
      }).catch(function(error) {
        // Handle any errors
      });

      task.snapshot.ref.getDownloadURL().then(downloadURL => {
        this.url = downloadURL;
        
        console.log('URL:' + this.url);
        this.send.sendfiles(this.url,this.id,this.selectedFile.name).
        subscribe(resp=>{
          window.alert("Upload Successful!");
          this.precentage=0;
          this.ifPo=false
          this.fileofstudent=[];
          this.ngOnInit();
          this.f=true;
          //window.location.reload();
        }
          
        );
        
        
      });
    });

  }
}
