import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/resources/services/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
