import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  productData: any = []

  constructor(private http: HttpClient) {
  }
 checkBtcPayment(address:string){
    return this.http.get("https://blockchain.info/q/addressbalance/"+address+"?confirmations=0")
 }
 LastPrice(){
  return this.http.get("http://cex.io/api/last_price/BTC/USD")
}
}
