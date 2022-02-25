import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/resources/services/product.service';
import { Product } from '../core/resources/models/product.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.productService
      .getCart()
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response) => {
          this.products = response;
        },
        error: (error) => {
          console.error('Error while getting the products data.' + error);
        },
      });
  }
}
