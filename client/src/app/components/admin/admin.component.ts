import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  mydata: any = []
  
  constructor(private prodservice: ProductService) { }

  ngOnInit(): void {
    this.addproducts()
  }
  addproducts() {
    this.prodservice.addproduct()
  }
}