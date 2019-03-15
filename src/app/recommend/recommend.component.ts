import { Component, OnInit } from '@angular/core';
import { RecomendserviceService } from './../services/recomendservice.service';
import { recomendDetails } from './../services/recomendModel';
import {ActivatedRoute,Router} from '@angular/router'
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

  constructor(private getrecomend:RecomendserviceService,private route:ActivatedRoute,private router:Router) { }
  recommendationForStud:recomendDetails[];
  recommendationForthisStud=new Array();
  loggedpersonFname;
loggedpersonLname;
loggedpersonfullname;
id;
ifsuporad;
show="show";
  ngOnInit() {
    if(localStorage.getItem('type')!="student"){
      this.ifsuporad=true;
    }
    this.id=this.route.snapshot.paramMap.get('id');
    this.loggedpersonFname=localStorage.getItem('fName');
    this.loggedpersonLname=localStorage.getItem('lName');
console.log(this.id);
    this.getrecomend.getData()
      .subscribe((data:recomendDetails[])=>{
        this.recommendationForStud=data;
      
        // console.log(this.recommendationForStud);
        for(var i=0;i<this.recommendationForStud.length;i++){
          if(this.recommendationForStud[i].studentid==this.id){
           
          length=this.recommendationForthisStud.push(this.recommendationForStud[i]);
          
             
          }
        }
        this.recommendationForthisStud.sort(this.dynamicSort("code"))          
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

onSubmitRecommend(formdata:NgForm){
  this.id=this.route.snapshot.paramMap.get('id');
  console.log(formdata.value.descrip)
  this.loggedpersonfullname=this.loggedpersonFname+" "+this.loggedpersonLname;
  this.id=this.route.snapshot.paramMap.get('id');
  this.getrecomend.sendData(formdata,this.id,this.loggedpersonfullname)
  .subscribe(res=>{
    this.recommendationForthisStud=[];
    this.ngOnInit();
  });
  
}
}
