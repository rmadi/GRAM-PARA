import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {authentication} from '../../services/authentication.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: Router,private authenticationservice: authentication) { }

  ngOnInit(): void {
    if(document.cookie.includes('GRAM')){
      this.checkLog(this.cookiefinder(document.cookie))
    }
  }
  checkLog(cook:string){
    console.log('cook')
    this.authenticationservice.checkLog(cook).subscribe((res:any)=>{
      console.log(res)
      if(res.role != 'admin'){
        window.location.href = window.location.origin;
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
