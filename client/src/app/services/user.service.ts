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
  editUser(firstName:string){
  return this.http.put("http://localhost:5555/product/:id",{firstName})
  }
  subscribee(email:string) {
    return this.http.post("http://localhost:5555/newsLetter/create",{email})
  }
}