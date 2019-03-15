import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }


  isAdmin;
  isStudent;
  isSup;
  ngOnInit() {

    localStorage.getItem('type');


    if( localStorage.getItem('type')=='admin'){
      this.isAdmin=true;
    }
    if( localStorage.getItem('type')=='supervisor'){
      this.isSup=true;
    }
    if( localStorage.getItem('type')=='student'){
      this.isStudent=true;
    }
  }

}
