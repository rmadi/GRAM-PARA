import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
products : any=[]
stocklimit: any=[]
  constructor(private prodservice: ProductService) { }

  ngOnInit(): void {
    this.getproducts()
  }
  getproducts() {
    this.prodservice.getproduct().subscribe((data) => {
      
      this.products=data
      this.stocklimit=this.products.slice(6,11)
      this.products = this.products.slice(0,5)
      
      console.log("gaston",data)
    })

}
}
