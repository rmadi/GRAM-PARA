import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
products : any=[]
  constructor(private prodservice: ProductService) { }

  ngOnInit(): void {
    this.getproducts()
  }
  getproducts() {
    this.prodservice.getproduct().subscribe((data) => {
      
      this.products=data
      console.log("gaston",data)
    })

}
}
