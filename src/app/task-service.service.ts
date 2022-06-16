import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { todotask } from './TS/todotask';
import { task } from './TS/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  public taskList :any =[];
  public tasks = new BehaviorSubject<any>([]);



  private taskURL = 'http://localhost:8080/api/v1/task';
  private todotaskURL = 'http://localhost:8080/api/v1/todotask';

  constructor(private http : HttpClient) { }

  postTask(data : any)
    {
        return this.http.post<any>('http://localhost:8080/api/v1/task',data)
        .pipe(map((res :any)=>{
          return res;
        }))
    }

    getTaskData()
    {
      return this.http.get(`http://localhost:8080/api/v1/task`)
      .pipe(map((res : any)=>{
        return res;
      }))
    }

    updateTask(id : number ,task : task )
    {
      return this.http.put<any>(`${this.taskURL}/${id}`,task);
    }

    getTaskById(id: number): Observable<task> {
      return this.http.get<task> (`${this.taskURL}/${id}`)
      .pipe(map((res :any)=>{
        return res;
      }))
    }

    deleteTaskData(id : number): Observable<Object>{
      return this.http.delete<Object>(`${this.taskURL}/${id}`);
    }

    getTask()
    {
    return this.tasks.asObservable();
    }

    setTask(product : any)
    {
    this.taskList.push(...product);
    this.tasks.next(product);
    }

    // ToDO TaskList

    postToDoTask(data : any)
    {
        return this.http.post<any>('http://localhost:8080/api/v1/todotask',data)
        .pipe(map((res :any)=>{
          return res;
        }))
    }

    getToDoTaskData()
    {
      return this.http.get(`http://localhost:8080/api/v1/todotask`)
      .pipe(map((res : any)=>{
        return res;
      }))
    }

    updateToDoTask(id : number ,todotask : todotask )
    {
      return this.http.put<any>(`${this.todotaskURL}/${id}`,todotask);
    }

    getToDoTaskById(id: number): Observable<todotask> {
      return this.http.get<todotask> (`${this.todotaskURL}/${id}`)
      .pipe(map((res :any)=>{
        return res;
      }))
    }

    deleteToDoTaskData(id : number): Observable<Object>{
      return this.http.delete<Object>(`${this.todotaskURL}/${id}`);
    }

    getToDoTask()
    {
    return this.tasks.asObservable();
    }

    setToDoTask(product : any)
    {
    this.taskList.push(...product);
    this.tasks.next(product);
    }
}
