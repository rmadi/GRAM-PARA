import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {authentication} from '../../services/authentication.service'
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

email : string = ""
password : string = ""
alertCheck:boolean=false;
  constructor(private authservice: authentication, private route: Router) { }

  ngOnInit(): void {
  }
  getEmail (event : Event){
    const {target} = event
    this.email = (target as HTMLButtonElement).value
  }
  getPassword (event : Event){
    const {target} = event
    this.password = (target as HTMLButtonElement).value
  }
  onsubmit() {
    this.authservice.login(this.email, this.password).subscribe((data:any) => {
      console.log(data)
<<<<<<< HEAD
      if(data.role == 'client'){
        document.location.href="/";
      }else if(data.role == 'admin'){
        window.location.href = window.location.origin+'/admin/products';
      }{
=======
      if(data.message == 'succeess'){
        // document.location.href="/";
        this.goToadmin()
          }else{
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
        console.log('herer')
        this.alertCheck = true;
      }
    })
this.goToadmin()
  }

 
goToRegister() {
  this.route.navigate(["register"])

}
goToadmin() {
  this.route.navigate(["admin"])
}

  
}
