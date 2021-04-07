import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {PaymentService} from '../../services/payment.service';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  total:number=0;
  products:any=[];
  cookie:any={};
  address:string="1DasGxAbmd5edVMq3SHVrgtn2X2q8voftU"
  QrCodeLink:string="";
  paidBtc:boolean=false;
  constructor(private prodservice: ProductService , private paymentservice: PaymentService) { }

  ngOnInit(): void {
    this.QrCodeLink = 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&address='+this.address+'&amount=0.000005'
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

  checkPayment(){
      this.paymentservice.checkBtcPayment(this.address).subscribe((result)=>{
        if(Number(result) > 0){
            this.paidBtc = true
        }
      })
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
