import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
  ];

  constructor() {}

  ngOnInit(): void {}

  clicked(data: any) {
    console.log(typeof data);
  }
}
