import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})

export class ItemCardComponent implements OnInit {

  @Input() productTitle: string ;
  @Input() Productprice: string ;
  @Input() productImage: string ;
  constructor() { 
    this.productTitle = '';
    this.Productprice = '';
    this.productImage = '';
  }
  
  ngOnInit(): void {
  }

}
