import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {authentication} from '../../services/authentication.service'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  id: string = ""
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  password: string = ''
  phoneNumber: string = ''
  city: string = ''
  address1: string = ''
  address2: string = ''
  zipCode: string = ''
  role: string = ''
  constructor(private editUserService: UserService,private authenticationservice: authentication) { }

  ngOnInit(): void {
    var temp = document.cookie
    
    if(temp.includes('GRAM')){
     
      this.getDataUser(this.cookiefinderuser(temp))
    }
  }
  changeData(event: Event): void{
    const {target} = event
     if((target as HTMLButtonElement).id == 'firstNamee'){
      this.firstName = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'lastNamee'){
      this.lastName = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'emaill'){
      this.email = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'passwordd'){
      this.password = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'phone'){
      this.phoneNumber = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'city'){
      this.city = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'adress1'){
      this.address1 = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'adress2'){
      this.address2 = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'zipCode'){
      this.zipCode = (target as HTMLButtonElement).value
     } 
  }
  editUser() {
    this.editUserService.editUser(this.id, this.firstName, this.lastName, this.email, this.password, this.phoneNumber, this.city, this.address1, this.address2, this.zipCode).subscribe((data: any) => {
      console.log(data)
    })
  }

  getDataUser(cook:string){
    this.authenticationservice.checkLog(cook).subscribe((res:any)=>{
      console.log('s',res)
  
        this.id = res._id
    })
  }

  cookiefinderuser(str:string): string{
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
