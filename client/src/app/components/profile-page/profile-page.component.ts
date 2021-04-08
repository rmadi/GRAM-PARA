import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {authentication} from '../../services/authentication.service'
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userData : any = []
  firstName : string = '' ; lastName : string = '' ; email : string = '' ; city : string = '';address1 : string = '';zipCode : string = ''
  constructor(private userservice: UserService,private authenticationservice: authentication) { }

  ngOnInit(): void {
    this.editUsers()
    if(document.cookie.includes('GRAM')){
      this.getDataUser(this.cookiefinder(document.cookie))
    }
  }
  editUsers() {
    this.userservice.getuser().subscribe((data) => {
      console.log("i am user",data)
      this.userData=data
    
      

    })

}
getDataUser(cook:string){
  this.authenticationservice.checkLog(cook).subscribe((res:any)=>{
    console.log(res)
    if(res.role == 'client'){
      this.firstName = res.firstName
      this.lastName = res.lastName
      this.email = res.email
      this.city = res.city
      this.address1 = res.address1
      this.zipCode  = res.zipCode
    }
  })
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
