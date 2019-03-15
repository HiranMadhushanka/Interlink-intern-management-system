import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { student } from '../services/ReadDataModel'
import { NgForm } from '@angular/forms';
import { SendDataServiceService } from '../services/send-data-service.service'
import { Router } from '@angular/router';
import { ReadDataServiceService } from '../services/read-data-service.service';
import { studentdetails } from '../services/StudentDataModel';
import {ToastrService} from '../toastr.service'
import {Md5} from 'ts-md5/dist/md5';
import {Chart} from 'chart.js';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('content') content: ElementRef
   @ViewChild('canvas', { read: ElementRef }) canvas:ElementRef;
   @ViewChild('canvas1', { read: ElementRef }) canvas1:ElementRef;
   @ViewChild('canvas2', { read: ElementRef }) canvas2:ElementRef;

  chart;
   chart1;
   chart2;

  noOfuniversityofMoratuwaIT=0;
  noOfuniversityofMoratuwaCSE=0;
  noOfUcsc=0;
  noOfSlitt=0;
  noOfNIBM=0;
  noOfIIT=0;
  noOfJavaInstitute=0;
  
  noOfuniversityofMoratuwaIT1=0;
  noOfuniversityofMoratuwaCSE1=0;
  noOfUcsc1=0;
  noOfSlitt1=0;
  noOfNIBM1=0;
  noOfIIT1=0;
  noOfJavaInstitute1=0;
  hashpassword:string
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  students: studentdetails[];
  id: String;
  constructor(private readService: ReadDataServiceService, private router: Router, private saveDta: SendDataServiceService,private toasterService:ToastrService) {

  }


  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(Md5.hashStr('lakd')) ;
    this.readService.getData()
      .subscribe((data: studentdetails[]) => {
        this.students = data;
        
      
        for(var i=0;i<this.students.length;i++){
          if(this.students[i].institute1=="University Of Moratuwa-Faculty of IT"){
            this.noOfuniversityofMoratuwaIT++;
          }
          if(this.students[i].institute1=="University Of Moratuwa-CSE"){
            this.noOfuniversityofMoratuwaCSE++;
          }
          if(this.students[i].institute1=="University Of Colombo School of Computing"){
            this.noOfUcsc++;
          }
          if(this.students[i].institute1=="SLIIT"){
            this.noOfSlitt++;
          }
          if(this.students[i].institute1=="NIBM"){
            this.noOfNIBM++;
          }
          if(this.students[i].institute1=="IIT"){
            this.noOfIIT++;
          }
          if(this.students[i].institute1=="Java Institute"){
            this.noOfJavaInstitute++;
          }
        }
        console.log(this.noOfuniversityofMoratuwaIT)
        console.log(this.noOfuniversityofMoratuwaCSE)
        this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
       
          type: 'bar',
          data: {
            labels:["Moratuwa IT","Moratwa CSE","UCSC","SLITT","NIBM","IIT","Java Institue"],
            datasets: [
              {
                data:[this.noOfuniversityofMoratuwaIT,this.noOfuniversityofMoratuwaCSE,this.noOfUcsc,this.noOfSlitt,this.noOfNIBM,this.noOfIIT,this.noOfJavaInstitute],
                borderColor:  [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(100, 179, 63, 1)'
              ],
                backgroundColor:[
                  'rgba(1, 1, 1, 5)',
                  'rgba(54, 162, 235, 2)',
                  'rgba(255, 206, 86, 2)',
                  'rgba(75, 192, 192, 2)',
                  'rgba(153, 102, 255, 2)',
                  'rgba(255, 159, 64, 2)',
                  'rgba(255, 251, 64, 2)'
              ],
                label: "Current No of Student",
                fill: true
              },
             
            ]
          },
          options: {
            legend: {
              display: true
            },
            responsive: false,
            scales: {
              xAxes: [{
                display:true
              }],
              yAxes: [{
                display: true
              }]
            },
        
            animation:{
              duration:3000,
              easing:'easeInOutBounce'
            }
          }
        })
        this.chart1 = new Chart(this.canvas1.nativeElement.getContext('2d'), {
       
          type: 'doughnut',
          data: {
            labels:["Moratuwa IT","Moratwa CSE","UCSC","SLITT","NIBM","IIT","Java Institue"],
            datasets: [
              {
                data:[this.noOfuniversityofMoratuwaIT,this.noOfuniversityofMoratuwaCSE,this.noOfUcsc,this.noOfSlitt,this.noOfNIBM,this.noOfIIT,this.noOfJavaInstitute],
                borderColor:  [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(100, 179, 63, 1)'
              ],
                backgroundColor:[
                  'rgba(1, 1, 1, 5)',
                  'rgba(54, 162, 235, 2)',
                  'rgba(255, 206, 86, 2)',
                  'rgba(75, 192, 192, 2)',
                  'rgba(153, 102, 255, 2)',
                  'rgba(255, 159, 64, 2)',
                  'rgba(255, 251, 64, 2)'
              ],
                label: "Current No of Student",
                fill: true
              },
             
            ]
          },
          options: {
            legend: {
              display: true
            },
            responsive: false,
            scales: {
              xAxes: [{
                display:true
              }],
              yAxes: [{
                display: true
              }]
            },
        
            animation:{
              duration:3000,
              easing:'easeInExpo'
            }
          }
        })
      })
     console.log(this.noOfuniversityofMoratuwaCSE)
  
  
    

   

     
  
  }
  onSubmit2(formdata: NgForm){
    // window.location.reload()
    console.log(Md5.hashStr('lakd')) ;
    this.readService.getData()
      .subscribe((data: studentdetails[]) => {
        this.students = data;
        console.log("machan "+Date.parse(this.students[1].endDate))
      
        for(var i=0;i<this.students.length;i++){
          if(Date.parse(formdata.value.destinationDate)<Date.parse(this.students[i].endDate)){
          if(this.students[i].institute1=="University Of Moratuwa-Faculty of IT"){
            this.noOfuniversityofMoratuwaIT1++;
          }
          if(this.students[i].institute1=="University Of Moratuwa-CSE"){
            this.noOfuniversityofMoratuwaCSE1++;
          }
          if(this.students[i].institute1=="University Of Colombo School of Computing"){
            this.noOfUcsc1++;
          }
          if(this.students[i].institute1=="SLIIT"){
            this.noOfSlitt1++;
          }
          if(this.students[i].institute1=="NIBM"){
            this.noOfNIBM1++;
          }
          if(this.students[i].institute1=="IIT"){
            this.noOfIIT1++;
          }
          if(this.students[i].institute1=="Java Institute"){
            this.noOfJavaInstitute1++;
          }
        }
        else{
          console.log("here here");
        }
        }
        console.log(this.noOfuniversityofMoratuwaIT)
        console.log(this.noOfuniversityofMoratuwaCSE)
        this.chart2= new Chart(this.canvas2.nativeElement.getContext('2d'), {
       
          type: 'bar',
          data: {
            labels:["Moratuwa IT","Moratwa CSE","UCSC","SLITT","NIBM","IIT","Java Institue"],
            datasets: [
              {
                data:[this.noOfuniversityofMoratuwaIT1,this.noOfuniversityofMoratuwaCSE1,this.noOfUcsc1,this.noOfSlitt1,this.noOfNIBM1,this.noOfIIT1,this.noOfJavaInstitute1],
                borderColor:  [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(100, 179, 63, 1)'
              ],
                backgroundColor:[
                  'rgba(1, 1, 1, 5)',
                  'rgba(54, 162, 235, 2)',
                  'rgba(255, 206, 86, 2)',
                  'rgba(75, 192, 192, 2)',
                  'rgba(153, 102, 255, 2)',
                  'rgba(255, 159, 64, 2)',
                  'rgba(255, 251, 64, 2)'
              ],
                label: "Current No of Student",
                fill: true
              },
             
            ]
          },
          options: {
            legend: {
              display: true
            },
            responsive: false,
            scales: {
              xAxes: [{
                display:true
              }],
              yAxes: [{
                display: true
              }]
            },
        
            animation:{
              duration:3000,
              easing:'easeInOutBounce'
            }
          }
        })
      })
     console.log(this.noOfuniversityofMoratuwaCSE)
  
  
     this.noOfuniversityofMoratuwaIT1=0;
     this.noOfuniversityofMoratuwaCSE1=0;
     this.noOfUcsc1=0;
     this.noOfSlitt1=0;
     this.noOfNIBM1=0;
     this.noOfIIT1=0;
     this.noOfJavaInstitute1=0;
   

    
  
  }
  public downloadPDF(){
    let doc =new jsPDF();
    let specialElementHandlers={
      '#editor':function(element,renderer){
          return true;
      }
    };
    let content =this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers':specialElementHandlers
    });

    doc.save('test.pdf');
  }
}


