import { Component, OnInit,AfterViewInit,ElementRef,ViewChild  ,HostListener} from '@angular/core';
import { ReadDataServiceService } from '../services/read-data-service.service';
import { studentdetails } from '../services/StudentDataModel';
import { Router,ActivatedRoute } from '@angular/router';
import { DeleteDataServiceService } from '../services/delete-data-service.service';
import * as jsPDF from 'jspdf';

import { MdbTableService } from '../services/mdb-table.service';

import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import {  SideComponent } from '../side/side.component';
import { ToastrService } from '../toastr.service';
declare const $;

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  @ViewChild('content') content: ElementRef
  constructor(private readData: ReadDataServiceService, private deletedata: DeleteDataServiceService, private router: Router,private route: ActivatedRoute,private tableService: MdbTableService,private dialog: MatDialog,private toasterService: ToastrService) { }
  students: studentdetails[];
  student: studentdetails;
  id;
  type;
  ifAdmin;
  url="http://rakcollege.agiuae.com/wp-content/uploads/2015/07/gent-300x300.png";


  
  elements: any = [];
  headElements = ['#', 'Email', 'First Name', 'Last Name'];

  searchText: string = '';
  previous: string;


  version = VERSION;

  fileNameDialogRef: MatDialogRef<SideComponent>;


  @HostListener('input') oninput() {
    this.searchItems();
  }


  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(SideComponent);
  }

  ngOnInit() {
   
    this.id=localStorage.getItem('dataSource');
    this.type=this.route.snapshot.paramMap.get('type');
 

  if(this.type=="admin"){
      this.ifAdmin=true;
  }
    this.readData.getData()
      .subscribe((data: studentdetails[]) => {
        this.students = data;
        //console.log(this.students[5].email);

        
        for (let i = 0; i <= 100; i++) {
          this.elements.push({ id: (i+1).toString(), first:  this.students[i].email, last: this.students[i].fname , handle: this.students[i].lname ,idx:this.students[i].id });
        }
      }

      );


      
      this.tableService.setDataSource(this.elements);
    this.elements = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();

  }



  searchItems() {
    const prev = this.tableService.getDataSource();

    if (!this.searchText) {
      this.tableService.setDataSource(this.previous);
      this.elements = this.tableService.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.tableService.searchLocalDataBy(this.searchText);
      this.tableService.setDataSource(prev);
    }

  }
  onsubmit(id: String) {
    this.type=this.route.snapshot.paramMap.get('type');
   
    this.router.navigate([this.type, this.id,'student',id]);
   
  }

  ondelete(id: String) {
    this.deletedata.deleteData(id)
      .subscribe(res => {
       this.elements=[];
       this.ngOnInit();
       this.Error();
      });






  }

  Error() {
    this.toasterService.Error("User Account Deleted!");
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

  getScreenShot(){
    window.print();
    // html2canvas(document.getElementById('capture')).then((canvas) => {
    //   this.newImg = canvas.toDataURL("image/png")
    // })
  }
}
