import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from 'src/app/task-service.service';
import { todotask } from 'src/app/TS/todotask';

@Component({
  selector: 'app-update-to-do-task',
  templateUrl: './update-to-do-task.component.html',
  styleUrls: ['./update-to-do-task.component.css']
})
export class UpdateToDoTaskComponent implements OnInit {

  id !: number;
  todotask: todotask = new todotask();
 constructor(private api : TaskServiceService,private route: ActivatedRoute, private router : Router) { }

 ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.api.getToDoTaskById(this.id).subscribe(data => {
   this.todotask = data;
   },
   error => console.log(error));
 }

 Submit(){
   this.api.updateToDoTask(this.id,this.todotask).subscribe(data =>{
   console.log(this.todotask);
   this.router.navigateByUrl('Doctors');
   },
   error => console.log(error)
   )}
}

