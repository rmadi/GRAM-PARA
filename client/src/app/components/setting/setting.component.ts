import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  password: string = ''
  phoneNumber: string = ''
  city: string = ''
  address1: string = ''
  constructor(private editUserService: UserService) { }

  ngOnInit(): void {
  }
  changeData(event: Event): void{
    const {target} = event
     if((target as HTMLButtonElement).id == 'firstName'){
      this.firstName = (target as HTMLButtonElement).value
    }
  }
  editUser() {
    this.editUserService.editUser(this.firstName).subscribe((data: any) => {
      console.log(data)
    })
  }
}
