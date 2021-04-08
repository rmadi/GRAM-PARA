import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {PaymentService} from '../../services/payment.service';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  total:any=0;
  products:any=[];
  cookie:any={};
  address:string="1DasGxAbmd5edVMq3SHVrgtn2X2q8voftU"
  QrCodeLink:string="";
  paidBtc:boolean=false;
  MethodBtc:boolean=false;
  amountBtc:any=0;
  continuePage:boolean=false;
  constructor(private prodservice: ProductService , private paymentservice: PaymentService) { }

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
      
      this.GetAmount()
      this.products = productsLocal
    }
  }
  GetAmount(){
    console.log('a')
    this.paymentservice.LastPrice().subscribe((data:any)=>{

        this.amountBtc = (this.total * 0.36 ) / data.lprice
        
        this.amountBtc = this.amountBtc.toFixed(5)
        this.total = this.total.toFixed(2)
    })
    this.QrCodeLink = 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&address='+this.address+'&amount='+this.amountBtc
  }

  checkPayment(){

      this.paymentservice.checkBtcPayment(this.address).subscribe((result)=>{
        if(Number(result) >= this.amountBtc){
            this.paidBtc = true
            this.continuePage = true;
        }else if(this.MethodBtc){
          setTimeout(()=>{ this.checkPayment() }, 3000);
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

  changeChek(value:string){
    if(value == 'bitcoin'){
      this.continuePage = false;
      this.MethodBtc = true;
      this.checkPayment();
    }else{
      this.MethodBtc = false;
      this.continuePage = true;
    }
  }
}
