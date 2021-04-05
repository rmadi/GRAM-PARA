import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';



@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.component.html',
  styleUrls: ['./categorie-page.component.css']
})
export class CategoriePageComponent implements OnInit {

  products:any=[]
  constructor(private prodservice: ProductService) { 

  }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts() {
    this.prodservice.getproduct().subscribe((data) => {
      this.products=data
      console.log('gaston',data)
    })
  }

}
