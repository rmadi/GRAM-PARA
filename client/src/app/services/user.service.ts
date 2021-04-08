import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData : any = []
  constructor(private http: HttpClient) {
  }
  getuser() {                                                                                                                                                                                                                                                                                       
    return this.http.get("http://localhost:5555/user")

 }
  postFrom(data:any) {
     return this.http.post('http://localhost:5555/user/create',data)
  }
   editUser(id:string, firstName:string, lastName:string, email:string, password:string, phoneNumber:string, city:string, address1: string, address2: string, zipCode:string ){
  return this.http.put("http://localhost:5555/user/"+id,{firstName, lastName, email, password, phoneNumber, city, address1, address2, zipCode})
  }
  subscribee(email:string) {
    return this.http.post("http://localhost:5555/newsLetter/create",{email})
  }
}