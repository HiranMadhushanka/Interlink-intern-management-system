import { stringify } from 'querystring';
import { TodoDetails } from './../services/toDoModel';
import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgForm} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  studentid;
  tasks:TodoDetails[];
 
  done=new Array();
  todo =new Array();

  constructor(private route:ActivatedRoute,private todoserv:TodoService) { }

  ngOnInit() {
    
    this.studentid=this.route.snapshot.paramMap.get('id');
    this.todoserv.getData()
    .subscribe((data:TodoDetails[])=>{
      this.tasks=data;
      for(var i=0;i<this.tasks.length;i++){
      if(this.tasks[i].studentid==this.studentid){  
        if(this.tasks[i].status=="todo"){
        length=this.todo.push(this.tasks[i]);         
        }
        else{
          length=this.done.push(this.tasks[i]);  
        }
      }
      else{}

      }


         
    })

  }

 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        // console.log( event.container.data[event.currentIndex])
                        // var data1=event.container.data[event.currentIndex][0];
                        // console.log(data1)
                        //  console.log(JSON.stringify(event.container.data[event.currentIndex])) 
                        
                        
    }
  
    var obj=JSON.stringify(event.container.data[event.currentIndex]);
    // console.log(obj)
    var json = JSON.parse(obj);
    var content=json.content;
    var todoid=json.id;
    var todostatus=json.status;
    console.log(todoid);
    if(todostatus=="todo"){
      this.todoserv.updateData(content,todoid,this.studentid,"done").subscribe((res=>{
        console.log("Changed and updated");
      }))
    }
    if(todostatus=="done"){
      this.todoserv.updateData(content,todoid,this.studentid,"todo").subscribe((res=>{
        console.log("Changed and updated");
      }))
    }

  
   
  }
  onSubmitTodo(formdata:NgForm){
 

    this.studentid=this.route.snapshot.paramMap.get('id');
    this.todoserv.sendData(formdata,this.studentid)
    .subscribe(res=>{
      this.todo=[];
      this.done=[];
      this.ngOnInit();
    });
  }
}
