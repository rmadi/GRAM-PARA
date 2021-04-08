import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {authentication} from '../../services/authentication.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged:boolean=false;

  constructor(private authenticationservice: authentication,
    private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("**********",this.router.snapshot.params)
    console.log(document.cookie)
    if(document.cookie.includes('GRAM')){
      
      this.checkLog(this.cookiefinder(document.cookie))
    }
  }

    checkLog(cook:string){
      console.log('cook')
      this.authenticationservice.checkLog(cook).subscribe((res:any)=>{
        if(res.message == 'success'){
          this.logged = true
        }
      })
    }
    logout(){
      document.cookie = "GRAM="
      document.location.href="/";
    }
    cookiefinder(str:string): string{
      var strx = str.split(', ');
      var found = ''
      for (var i = 0; i < strx.length; i++) {
          if(strx[i].includes('GRAM')){
             found =  strx[i].replace('GRAM=','')
          }
      }
      return found
    }
}
