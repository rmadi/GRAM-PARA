import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {PaymentService} from '../../services/payment.service';
import {authentication} from '../../services/authentication.service'

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  total:any=0;
  products:any=[];
  cookie:any={};
  address:string="3CgNgHE4VbgdeU1zDD7uPcjorvxmLefwY1"
  QrCodeLink:string="";
  paidBtc:boolean=false;
  MethodBtc:boolean=false;
  amountBtc:any=0;
  continuePage:boolean=false;
  firstName : string = '' ; lastName : string = '' ; email : string = '' ; city : string = '';address1 : string = '';zipCode : string = '';phone:string='';address2 : string = ''
  constructor(private prodservice: ProductService , private paymentservice: PaymentService,private authenticationservice: authentication) { }

  ngOnInit(): void {

    
    var temp = document.cookie
    
    if(temp.includes('GRAM')){
     
      this.getDataUser(this.cookiefinderuser(temp))
    }
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
    console.log("check")
      this.paymentservice.checkBtcPayment(this.address).subscribe((result)=>{
        console.log(result)
        console.log(Number(result))
        if(Number(result) * 0.00000001>= this.amountBtc){
            this.paidBtc = true
            this.continuePage = true;
        }else if(this.MethodBtc){
          setTimeout(()=>{ this.checkPayment() }, 3000);
        }
      })
      
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
  
getDataUser(cook:string){
  this.authenticationservice.checkLog(cook).subscribe((res:any)=>{
    console.log('s',res)

      this.firstName = res.firstName
      this.lastName = res.lastName
      this.email = res.email
      this.city = res.city
      this.address1 = res.address1
      this.zipCode  = res.zipCode
      this.phone  = res.phoneNumber
      this.address2 = res.address2
  })
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
cookiefinderuser(str:string): string{
  var strx = str.split('; ');
  var found = ''
  for (var i = 0; i < strx.length; i++) {
      if(strx[i].includes('GRAM')){
         found =  strx[i].replace('GRAM=','')
      }
  }
  return found
}

}
