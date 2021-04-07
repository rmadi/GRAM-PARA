import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {
  email: string = ''
  constructor(private subUser: UserService) { }

  ngOnInit(): void {
  }
changeData(event: Event): void {
  const { target } = event

   if((target as HTMLButtonElement).id == 'emaill'){
      this.email = (target as HTMLButtonElement).value
    }
  }
   subscribeUser() {
    this.subUser.subscribee(this.email).subscribe((data)=> {
      console.log(data)
    })
  }
}