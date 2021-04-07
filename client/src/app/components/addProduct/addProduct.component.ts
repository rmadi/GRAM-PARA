import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class addProductComponent implements OnInit {
  mydata: any = []
  title: string = ''
  category: string = ''
  price: string = ''
  pricePromo: string = ''
  producer: string = ''
  imageUrl: string = ''
  description: string = ''
  stock: string = ''
  constructor(private prodservice: ProductService) { }

  ngOnInit(): void {}
  changeData(event: Event): void {
    const { target } = event

    if((target as HTMLButtonElement).id == 'titleaa'){
      this.title = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'categoryaa'){
      this.category = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'priceaa'){
      this.price = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'pricePromoaa'){
      this.pricePromo = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'produceraa'){
      this.producer = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'imageUrlaa'){
      this.imageUrl = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'stockaa'){
      this.stock = (target as HTMLButtonElement).value
    }
    if((target as HTMLButtonElement).id == 'descriptionaa'){
      this.description = (target as HTMLButtonElement).value
    }
  }
  addproducts() {
    this.prodservice.addproduct(this.title, this.category,  this.price, this.pricePromo, this.producer, this.imageUrl,  this.stock, this.description).subscribe((data:any)=> {
      console.log(data)
    })
  }
}