import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
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
