import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class authentication {



  constructor(private http: HttpClient) {
  }
  login(email : string , password : string) {
     return this.http.post("http://localhost:5555/user/signin",{email,password})
  }
}
