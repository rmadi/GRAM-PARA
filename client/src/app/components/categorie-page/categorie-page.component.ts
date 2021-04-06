import { Component, OnInit } from '@angular/core';
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
  constructor(private prodservice: ProductService) { 

  }

  ngOnInit(): void {
    this.getproducts()
  }
  pageProducts(event:Event){
    var { target } = event
    if (target){

    var pageNum = Number((target as HTMLButtonElement).id)-1
    this.Pageproducts = this.products.slice(pageNum*9,pageNum*9+9)
    }
  }
  getproducts() {
    this.prodservice.getproduct().subscribe((data) => {
      this.products=data
      this.Pageproducts = this.products.slice(0,9)
      this.pages = Array(Math.round(this.products.length/9)-1)
    })
  }

}
