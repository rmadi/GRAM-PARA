import { Component, OnInit } from '@angular/core';
import {authentication} from '../../services/authentication.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged:boolean=false;

  constructor(private authenticationservice: authentication) { }

  ngOnInit(): void {
    console.log(document.cookie)
    if(document.cookie.includes('GRAM')){
      this.checkLog(this.cookiefinder(document.cookie))
    }
  }

    checkLog(cook:string){
      console.log('cook')
      this.authenticationservice.checkLog(cook).subscribe((res:any)=>{
        console.log(res)
        if(res.role == 'client'){
          this.logged = true
        }
      })
    }
    logout(){
      document.cookie = "GRAM="
      document.location.href="/";
    }
    cookiefinder(str:string): string{
      var strx = str.split('; ');
      var found = ''
      for (var i = 0; i < strx.length; i++) {
          if(strx[i].includes('GRAM')){
             found =  strx[i].replace('GRAM=','')
          }
      }
      return found
    }
}
