import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  postFrom(data:any) {
     return this.http.post('http://localhost:5555/user/create',data)
  }
}