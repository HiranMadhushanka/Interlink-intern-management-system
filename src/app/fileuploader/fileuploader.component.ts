import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {storage} from 'firebase';
import {ActivatedRoute} from '@angular/router';
import {MassageData} from '../services/massage-data.model';
import {NgForm} from '@angular/forms';
import Axios, {AxiosPromise} from 'axios';
@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

promises=[];
  messages: MassageData = {
    mDescription:'',
    senderaId:'',
    recieverId:'',
    time:"n"

  }
selectedFile=null;
url;
senderId;
recieverId;
  ngOnInit() {
    this.senderId=this.route.snapshot.paramMap.get('id');
    this.recieverId=this.route.snapshot.paramMap.get('senderId');
    // var config = {
    //   apiKey: "AIzaSyC8VdhBJ8JrRQkGOx08Tw3rLBHkWy7IlYA",
    //   authDomain: "ndyearproject16.firebaseapp.com",
    //   databaseURL: "https://ndyearproject16.firebaseio.com",
    //   projectId: "ndyearproject16",
    //   storageBucket: "ndyearproject16.appspot.com",
    //   messagingSenderId: "483511651851"
    // };
   

    // firebase.initializeApp(config);
    var ref=firebase.database().ref('Messages');
    var keys=ref.toString()+'.json?shallow=true';
    

    ref.once('value',function gotDadata(data){
      var messages=data.val();
     //this.messages=data;
      var keys=Object.keys(messages);
      
      for(var i=0;i<keys.length;i++){
        var k=keys[i];
        console.log("sender : "+messages[k].senderId);
        console.log("reciever : "+messages[k].recieverId);
        console.log("message : "+messages[k].mDescription);
        console.log(" ");
         //this.promises.push(messages[k]);
     if(messages[k].senderId!=null){
      // console.log(messages[k].senderId.toString());
      // console.log(messages[k].recieverId);
      // console.log(messages[k].mDescription);
      //this.messages[i]=messages[k].mDescription.toString();
      //console.log(this.messages[i]);
     }//this.messages.mDescription=messages[k].mDescription;
       
        //console.log(this.messages[i]);
      }

      
      
    });

   //console.log(this.promises);
    
  }

  onFileSelected(event){
   
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);
    var storageRef=storage().ref(this.senderId);
    var metadata={'contentType':this.selectedFile.contentType}
    console.log(storageRef);
    var task:firebase.storage.UploadTask=storageRef.put(this.selectedFile,metadata);
   
    
    task.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      
      task.snapshot.ref.getDownloadURL().then(downloadURL => {
        this.url = downloadURL;
        console.log('URL:' + this.url);
      });
    });

  }


  onSubmit(formdata:NgForm){
    var timestamp = new Date().getTime();
    
    var ref2=firebase.database().ref('Messages/'+timestamp).set({
      mDescription:formdata.value.email,
      senderId:this.senderId,
      recieverId:this.recieverId,
      time:timestamp.toString()
    });
    

      //ref2.push(this.data);
      
  }

}
