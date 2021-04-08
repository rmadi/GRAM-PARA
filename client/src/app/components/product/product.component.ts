import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router'




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product:any=[];
  id : any;
  inCart:boolean=false;

  constructor( private prodservice: ProductService ,private router : ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.router.snapshot.params;
    this.CheckIncart()
    this.getproducts()
 
  }
  getproducts() {
    this.prodservice.getOneProduct(this.id.id).subscribe((data) => {
      this.product = data
         console.log('data', this.product)
    })
  }
  AddToCart(){
    var cookies  = document.cookie;
    if(cookies.includes('cart')){
      var valueCook = this.cookiefinder(cookies)
      var objOfCookie = JSON.parse(valueCook)
      objOfCookie[objOfCookie.length] = {id:this.id.id,quantity:1}
      var orderForCookie = JSON.stringify(objOfCookie)
      document.cookie = 'cart='+orderForCookie
    }else{
      var order = [{id:this.id.id,quantity:1}] 
      var orderForCookie = JSON.stringify(order)
      document.cookie = 'cart='+orderForCookie
    }
    this.CheckIncart()
    
  }
  CheckIncart(){
    var cookies  = String(document.cookie);
    console.log(cookies)
    if(cookies.includes(this.id.id) && !cookies.includes('"id":"'+this.id.id+'","quantity":0')){
      console.log("here")
      this.inCart = true;
    }
    console.log("ook")
  }
  cookiefinder(str:string): string{
    var strx = str.split('; ');
    var found = ''
    for (var i = 0; i < strx.length; i++) {
        if(strx[i].includes('cart')){
           found =  strx[i].replace('cart=','')
        }
    }
    return found
  }
}
