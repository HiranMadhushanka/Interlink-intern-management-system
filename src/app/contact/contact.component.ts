import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { $ } from 'protractor';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
newImg;
  constructor() { }

  ngOnInit() {
  }

  getScreenShot(){
    window.print();
    // html2canvas(document.getElementById('capture')).then((canvas) => {
    //   this.newImg = canvas.toDataURL("image/png")
    // })
  }
}
