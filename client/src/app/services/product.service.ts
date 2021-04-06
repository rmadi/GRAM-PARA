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
    return this.http.get("http://localhost:5555/product")
  }
  addproduct(title:string, category:string, price:string , pricePromo:string, producer: string,  imageUrl:string,  stock: string, description: string  ) {
    return this.http.post("http://localhost:5555/product/create",{title, category, price, pricePromo,  producer, imageUrl, stock, description})
  }
}


// export interface ProductData{
//   name: string,
//   description: string,
//   id:number,
// }
