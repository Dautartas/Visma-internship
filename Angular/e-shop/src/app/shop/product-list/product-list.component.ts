import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/resources/services/product.service';
import { Product } from '../../core/resources/models/product.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CartService } from 'src/app/core/resources/services/cart.service';
@UntilDestroy()
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
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

  addToCart(product: Product) {
    this.cartService
      .addToCart(product)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response) => {},
        error: (error) => {
          console.error('Error while adding product to the cart. ' + error);
        },
        complete: () => {
          alert('product added');
        },
      });
  }
}
