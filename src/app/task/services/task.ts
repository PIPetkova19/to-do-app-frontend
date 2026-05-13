import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
private apiUrl='http://localhost:8081/api/tasks';

constructor(private http: HttpClient){}

getTasks(): Observable<Task[]>{
  return this.http.get<Task[]>(this.apiUrl);
}

getTaskById(id: number):  Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
}
}
