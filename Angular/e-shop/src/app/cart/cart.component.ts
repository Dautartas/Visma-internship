import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/resources/services/product.service';
import { Product } from '../shop/product-list/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.products = this.productService.getCart();
  }
}
