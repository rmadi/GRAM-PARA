import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})

export class ItemCardComponent implements OnInit {
  inCart:boolean;
  @Input() productTitle: string ;
  @Input() Productprice: string ;
  @Input() productImage: string ;
  @Input() productId: string ;
  constructor() { 
    this.productTitle = '';
    this.Productprice = '';
    this.productImage = '';
    this.productId = '';
    this.inCart = false;
  }
  
  ngOnInit(): void {
    this.CheckIncart()
  }
  AddToCart(){
    var cookies  = document.cookie;
    if(cookies.includes('cart')){
      var valueCook = this.cookiefinder(cookies)
      var objOfCookie = JSON.parse(valueCook)
      objOfCookie[objOfCookie.length] = {id:this.productId,quantity:1}
      var orderForCookie = JSON.stringify(objOfCookie)
      document.cookie = 'cart='+orderForCookie
    }else{
      var order = [{id:this.productId,quantity:1}] 
      var orderForCookie = JSON.stringify(order)
      document.cookie = 'cart='+orderForCookie
    }
    this.CheckIncart()
    
  }
  CheckIncart(){
    var cookies  = document.cookie;
    console.log(cookies)
    if(cookies.includes(this.productId) && !cookies.includes('"id":"'+this.productId+'","quantity":0')){
      this.inCart = true;
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
