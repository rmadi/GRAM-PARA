import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
//   @NgModule({
//   imports: [
//     HttpClient,
//   ]
// })
export class ProductComponent implements OnInit {
  mydata:any=[]

  constructor( private prodservice: ProductService) { }
  ngOnInit(): void {
    this.getproducts()
  }
  getproducts() {
    this.prodservice.getproduct().subscribe((data) => {
      this.mydata=data
    })
  }

}
