import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gram-para';
  showNavFoot:boolean=true;
  ngOnInit(): void {
    if(window.location.href.includes('admin')){
      this.showNavFoot = false;
    }
  }
}