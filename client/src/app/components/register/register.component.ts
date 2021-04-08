import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userData: any = {};

  firstName: String = '';
  lastName: String = '';
  email: String = '';
  password: String = '';

  rpassword: String = '';
  phone: String = '';
  city: String = '';
  adress1: String = '';
  adress2: String = '';

  zipCode: String = '';

  role: String = '';
  // data:Object = {firstName:'', lastName:'', email:'', password:'', phone:'', city:'',
  //  adress1:'', adress2:'', zipCode:'', role:'' }

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {}
  changeData(event: Event) {
    const { target } = event;
    if (target) {
      if ((target as HTMLButtonElement).id == 'firstName') {
        // console.log((target as HTMLButtonElement).value)
        this.firstName = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'lastName') {
        // console.log((target as HTMLButtonElement).value)
        this.lastName = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'email') {
        // console.log((target as HTMLButtonElement).value)
        this.email = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'password') {
        // console.log((target as HTMLButtonElement).value)
        this.password = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'rpassword') {
        // console.log((target as HTMLButtonElement).value)
        this.rpassword = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'phone') {
        // console.log((target as HTMLButtonElement).value)
        this.phone = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'city') {
        // console.log((target as HTMLButtonElement).value)
        this.city = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'adress1') {
        // console.log((target as HTMLButtonElement).value)
        this.adress1 = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'adress2') {
        // console.log((target as HTMLButtonElement).value)
        this.adress2 = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'zipCode') {
        // console.log((target as HTMLButtonElement).value)
        this.zipCode = (target as HTMLButtonElement).value;
      }
      if ((target as HTMLButtonElement).id == 'role') {
        // console.log((target as HTMLButtonElement).value)
        this.role = (target as HTMLButtonElement).value;
      }
    }
  }
  
  
  postFrom() {
    this.userService.postFrom({firstName:this.firstName, lastName:this.lastName, email:this.email, password:this.password, phone:this.phone, city:this.city, adress1:this.adress1
    
      ,adress2:this.adress2, zipCode:this.zipCode, role:this.role}).subscribe(()=>console.log('your data is posted'))

      this.router.navigate(["singin"])


    }
      // regoupdata() {
  //   this.userData={firstName:this.firstName, lastName:this.lastName, email:this.email, password:this.password, phone:this.phone, city:this.city, adress1:this.adress1
    
  //   ,adress2:this.adress2, zipCode:this.zipCode, role:this.role}
  //   return (this.userData)
  // }
}
