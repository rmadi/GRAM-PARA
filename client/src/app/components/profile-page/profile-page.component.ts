import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userData : any = []
  firstName : string = '' ; lastName : string = '' ; email : string = '' ; city : string = '';address1 : string = '';zipCode : string = ''
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.editUsers()
  }
  editUsers() {
    this.userservice.getuser().subscribe((data) => {
      console.log("i am user",data)
      this.userData=data
    
      

    })

}
}
