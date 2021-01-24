import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './home/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  GetUsers():Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
