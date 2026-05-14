import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class UserService {

  private apiUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  submitApp(firstName: string, lastName: string, email: string): Observable<User> {

    const user = {
      firstName,
      lastName,
      email
    };

    return this.http.post<User>(this.apiUrl, user);
  }
}