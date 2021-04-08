import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../../services/product.service';



@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.component.html',
  styleUrls: ['./categorie-page.component.css']
})
export class CategoriePageComponent implements OnInit {

  products:any=[]
  Pageproducts:any=[]
  pages:any=[]
  constructor(private prodservice: ProductService,
    private route : Router) { 

  }

  ngOnInit(): void {
    this.getproducts()
  }
  pageProducts(event:Event){
    var { target } = event
    if (target){

    var pageNum = Number((target as HTMLButtonElement).id)-1
    this.Pageproducts = this.products.slice(pageNum*8,pageNum*8+8)
    }
  }
  getproducts() {
    this.prodservice.getproduct().subscribe((data) => {
      this.products=data
      this.Pageproducts = this.products.slice(0,8)
      this.pages = Array(Math.round(this.products.length/8)-1)
    })
  }

}
