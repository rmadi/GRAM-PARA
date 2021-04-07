import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router'




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product:any=[];
  id : any;

  constructor( private prodservice: ProductService ,private router : ActivatedRoute) { }
  ngOnInit(): void {
    console.log('router params ',this.router.snapshot.params)
    this.id = this.router.snapshot.params;
    console.log('this is my id stroed in my component',this.id)

    this.getproducts()
 
  }
  getproducts() {
    this.prodservice.getOneProduct(this.id.id).subscribe((data) => {
      this.product = data
         console.log('data', this.product)
    })
  }
}
