import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
private apiUrl='http://localhost:8081/api/tasks';

constructor(private http: HttpClient){}

getTasks(){
  return this.http.get<any[]>(this.apiUrl);
}

getTaskById(id: number){
    return this.http.get<any>(`${this.apiUrl}/${id}`);
}
}
