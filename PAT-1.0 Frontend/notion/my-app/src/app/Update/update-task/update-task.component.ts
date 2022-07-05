import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from 'src/app/task-service.service';
import { task } from 'src/app/TS/task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  id !: number;
  task: task = new task();
 constructor(private api : TaskServiceService,private route: ActivatedRoute, private router : Router) { }

 ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.api.getTaskById(this.id).subscribe(data => {
   this.task = data;
   },
   error => console.log(error));
 }

 Submit(){
   this.api.updateTask(this.id,this.task).subscribe(data =>{
   console.log(this.task);
   this.router.navigateByUrl('TaskList');
   },
   error => console.log(error)
   )}
}

