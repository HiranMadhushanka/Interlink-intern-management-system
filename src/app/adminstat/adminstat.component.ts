
import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { ReadDataServiceService } from '../services/read-data-service.service';
import { studentdetails } from '../services/StudentDataModel';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-adminstat',
  templateUrl: './adminstat.component.html',
  styleUrls: ['./adminstat.component.scss']
})
export class AdminstatComponent implements OnInit {
  // @ViewChild('content') content: ElementRef
  
  @ViewChild('canvas', { read: ElementRef }) canvas:ElementRef;
  chart:any;
  students: studentdetails[];
  constructor(private readService: ReadDataServiceService) { }

  ngOnInit() {
    this.readService.getData()
     .subscribe((data:studentdetails[])=>{
      this.students = data;
      console.log(this.students[1].institute1)
      for(var i=0;this.students.length;i++){
        
      }
     })
  }
  ngAfterViewInit() {
   
 
  
    
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
       
      type: 'bar',
      data: {
        labels:["A","B","C"],
        datasets: [
          {
            data:[12,25,35],
            borderColor: '#000000',
            backgroundColor:'000000',
            fill: false
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
   
   console.log(this.chart)
     
  
  }

  getScreenShot(){
    window.print();
    // html2canvas(document.getElementById('capture')).then((canvas) => {
    //   this.newImg = canvas.toDataURL("image/png")
    // })
  }
  // public downloadPDF(){
  //   let doc =new jsPDF();
  //   let specialElementHandlers={
  //     '#editor':function(element,renderer){
  //         return true;
  //     }
  //   };
  //   let content =this.content.nativeElement;
  //   doc.fromHTML(content.innerHTNL,15,15,{
  //     'width':190,
  //     'elementHandlers':specialElementHandlers
  //   });

  //   doc.save('test.pdf');
  // }
}
