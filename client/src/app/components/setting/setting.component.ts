import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

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
  constructor(private editUserService: UserService) { }

  ngOnInit(): void {
  }
  changeData(event: Event): void{
    const {target} = event
     if((target as HTMLButtonElement).id == 'firstName'){
      this.firstName = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'lastName'){
      this.lastName = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'email'){
      this.email = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'password'){
      this.password = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'phoneNumber'){
      this.phoneNumber = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'city'){
      this.city = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'address1'){
      this.address1 = (target as HTMLButtonElement).value
     }
     if((target as HTMLButtonElement).id == 'address2'){
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
}
