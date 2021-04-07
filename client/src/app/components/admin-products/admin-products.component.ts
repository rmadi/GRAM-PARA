import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products:any=[]
  title:string=''
  price:string=''
  pricepromo:string=''
  imageUrl:string=''
  description:string=''
  producer:string=''
  category:string=''
  stock:string=''
  id:string=''
  alert:boolean=false
  constructor(private prodservice: ProductService) { 

  }

  ngOnInit(): void {
    this.getproducts()
  }

  deleteProduct(id:string) {
    this.prodservice.DeleteProduct(id).subscribe((result:any) => {
      this.getproducts()
      
    })
 }
 EditSelected(id:string,title:string,price:string,pricepromo:string,imageUrl:string,description:string,producer:string,category:string,stock:string){
   this.title = title
   this.price = price
   this.pricepromo = pricepromo
   this.imageUrl = imageUrl
   this.description = description
   this.producer = producer
   this.category = category
   this.stock = stock
   this.id = id
 } 
 dismissAlert(){
   this.alert = false
 }
 EditProduct(){
  this.prodservice.editProduct(this.id,this.title,this.price,this.pricepromo,this.imageUrl,this.description,this.producer,this.category,this.stock ).subscribe((result) => {
      this.getproducts()
      this.alert = true
 
  })
 }
 ChangeInput(event:Event): void{
  var { target } = event
  if (target){
    if((target as HTMLButtonElement).id == 'titleEdit'){
      this.title = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'categoryEdit'){
      this.category = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'priceEdit'){
      this.price = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'pricePromo'){
      this.pricepromo = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'producerEdit'){
      this.producer = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'StockEdit'){
      this.stock = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'imageUrlEdit'){
      this.imageUrl = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'descreptionEdit'){
      this.description = (target as HTMLButtonElement).value
    }
  } 
   
 }


  getproducts() {
    this.prodservice.getproduct().subscribe((data) => {
      this.products=data
      console.log(data)
    })
  }

}
