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
  DeleteProduct(id:string) {
    return this.http.delete("http://localhost:5555/product/"+id)
 }
 editProduct(id:string,title:string,price:string,pricepromo:string,imageUrl:string,description:string,producer:string,category:string,stock:string){
  return this.http.put("http://localhost:5555/product/"+id,{title,price,pricepromo,imageUrl,description,producer,category,stock})
 }
 getOneProduct(id:string){
    return this.http.get("http://localhost:5555/product/"+id)
  }
   
  
}


// export interface ProductData{
//   name: string,
//   description: string,
//   id:number,
// }
