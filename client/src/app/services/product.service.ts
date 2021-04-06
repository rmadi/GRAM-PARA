import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productData: any = []
  addProduct: any = []
  
  constructor(private http: HttpClient) {
  }
  getproduct() {
    return this.http.get("http://localhost:5555/product")
  }
  addproduct() {
    return this.http.post("http://localhost:5555/product/create",{})
  }
}
// export interface ProductData{
//   name: string,
//   description: string,

//   id:number,
// }
