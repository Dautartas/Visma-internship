import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/resources/services/product.service';
import { Product } from '../core/resources/models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  selectedProduct!: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductSelected().subscribe((product: Product) => {
      this.selectedProduct = product;
    });
  }
}
