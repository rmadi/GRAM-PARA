import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total:number=0;
  products:any=[];
  cookie:any={};
  constructor(private prodservice: ProductService) { }

  ngOnInit(): void {
    this.GetData()
  }
  GetData(){
    var cookies  = document.cookie;
    if(cookies.includes('cart')){
      var valueCook = this.cookiefinder(cookies)
      var cookie = JSON.parse(valueCook)
      var productsLocal:any=[];
      for(var i=0;i<cookie.length;i++){
        this.total = 0
        this.cookie = cookie[i]
        if(cookie[i] != null  && cookie[i].quantity>0){
          this.prodservice.getOneProduct(cookie[i].id).subscribe((data)=>{
            var res:any
            res = data
            res.quantity = this.cookie.quantity
            productsLocal.push(data)
            this.total += this.cookie.quantity * res.price
          })
        }
      }
      this.products = productsLocal
    }
  }
  incrementquant(id:string){
    var cookies  = document.cookie;
    if(cookies.includes('cart')){
      var valueCook = this.cookiefinder(cookies)
      var cookie = JSON.parse(valueCook)
      
      for(var i=0;i<cookie.length;i++){

        if(cookie[i] != null && cookie[i].id == id){
          cookie[i].quantity += 1
        }
      }
      var orderForCookie = JSON.stringify(cookie)
      document.cookie = 'cart='+orderForCookie
      this.GetData()
    }
  }
  decremntQuant(id:string){
    var cookies  = document.cookie;
    if(cookies.includes('cart')){
      var valueCook = this.cookiefinder(cookies)
      var cookie = JSON.parse(valueCook)
      
      for(var i=0;i<cookie.length;i++){

        if(cookie[i] != null && cookie[i].id == id && cookie[i].quantity>0){
          cookie[i].quantity -= 1
        }
      }
      var orderForCookie = JSON.stringify(cookie)
      document.cookie = 'cart='+orderForCookie
      this.GetData()
    }
  }

  deleteFromCart(id:string){
    var cookies  = document.cookie;
    if(cookies.includes('cart')){
      var valueCook = this.cookiefinder(cookies)
      var cookie = JSON.parse(valueCook)
      
      for(var i=0;i<cookie.length;i++){

        if(cookie[i] != null && cookie[i].id == id){
          delete cookie[i]
        }
      }
      var orderForCookie = JSON.stringify(cookie)
      document.cookie = 'cart='+orderForCookie
      this.GetData()
    }
  }

  cookiefinder(str:string): string{
    var strx = str.split(', ');
    var found = ''
    for (var i = 0; i < strx.length; i++) {
        if(strx[i].includes('cart')){
           found =  strx[i].replace('cart=','')
        }
    }
    return found
  }
}
