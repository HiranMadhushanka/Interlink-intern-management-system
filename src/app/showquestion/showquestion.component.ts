import { ReadanswerService } from './../services/readanswer.service';
import { answerdetails } from './../services/answerModel';
import { WriteanswerService } from './../services/writeanswer.service';
import { questiondetails } from './../services/questionModel';
import { ReadquestionService } from './../services/readquestion.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {ReadOneDataServiceService} from '../services/read-one-data-service.service';
import {NgForm} from '@angular/forms';
import { studentdetails } from './../services/StudentDataModel';




@Component({
  selector: 'app-showquestion',
  templateUrl: './showquestion.component.html',
  styleUrls: ['./showquestion.component.scss']
})
export class ShowquestionComponent implements OnInit {
  id :String;
  questionid:String;
  student:studentdetails;
   counter:number=0;
  
  name:String;
 
  questions:questiondetails[];
  questionBoard=new Array();
  answers:answerdetails[];
  answerBoard=new Array();
  particularAnswerBoard=new Array();

  constructor(private quesDetail:ReadquestionService,private writeans:WriteanswerService,private router:Router,private ansDetail:ReadanswerService,private route:ActivatedRoute,private getData:ReadOneDataServiceService) { }

  ngOnInit() {
    this.id=localStorage.getItem('dataSource');
    this.name=localStorage.getItem('fName')+" "+localStorage.getItem('lName')
    this.quesDetail.getData()
    .subscribe((data: questiondetails[])=>{
      this.questionBoard=data;
      this.questionBoard.sort(this.dynamicSort("code"))
      this.questionBoard.reverse();
    // console.log(this.questionBoard)
      
    }) 

  }

  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

onSubmit(formdata:NgForm){
 // console.log(this.questionid);
  this.writeans.sendData(formdata,this.name,this.questionid).subscribe(res=>{
    // 
    this.ngOnInit();
  });

}
highlightSelected(selectedCountry) {
  
 // this.counter++;
//console.log(selectedCountry.id)
//if(this.counter==1){
  this.particularAnswerBoard=[];
 this.questionid=selectedCountry.id;
 this.ansDetail.getData()
 .subscribe((data: answerdetails[])=>{
   this.answerBoard=data;
   for(var i=0;i<this.answerBoard.length;i++){
    if(this.answerBoard[i].questionid==selectedCountry.id){
      // console.log(this.techskills[i]);
    length=this.particularAnswerBoard.push(this.answerBoard[i]);
    
       
    }
    else{
      console.log("skip")
    }
  }
   this.particularAnswerBoard.sort(this.dynamicSort("code"))
   this.particularAnswerBoard.reverse();
  console.log(this.particularAnswerBoard)
  
   
 }) 
// }
// else{
//   this.particularAnswerBoard=[];
//   window.location.reload();

// }
}
}
