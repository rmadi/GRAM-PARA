import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  email: String='';
  password: String='';
  constructor() { }

  ngOnInit(): void {
  }
  onSingin(event:Event) {
    const {target} = event;
    if (target) {
      if ((target as HTMLButtonElement).id == 'email') {
        this.email=((target as HTMLButtonElement).value)
      }
      if ((target as HTMLButtonElement).id == 'password') {
       this.password=((target as HTMLButtonElement).value)
      }
    }
   
  }
  
}
