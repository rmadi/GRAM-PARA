import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData: any = []

  constructor(private http: HttpClient) {
  }
  getproduct() {
     return this.http.get("http://localhost:5555/product/")
  }
  DeleteProduct(id:string) {
    return this.http.delete("http://localhost:5555/product/"+id)
 }
 editProduct(id:string,title:string,price:string,pricepromo:string,imageUrl:string,description:string,producer:string,category:string,stock:string){
  return this.http.put("http://localhost:5555/product/"+id,{title,price,pricepromo,imageUrl,description,producer,category,stock})
 }
}
