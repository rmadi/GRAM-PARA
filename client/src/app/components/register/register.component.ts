import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // firstName ='';
  // lastName = '';
  // email = '';
  // password = '';
  
  // rpassword = '';
  // phoneNumber = null;
  // city = '';
  // address1 = '';
  // address2 = '';

  // zipCode  = null;

  // role = '';




  constructor() { }
  
  ngOnInit(): void {
  
  }
// getFirst(event:any) {
//   this.firstName +=event.target.value;
//   console.log(this.firstName)
// }
getValues(val:any) {
  console.warn(val)
}
}
