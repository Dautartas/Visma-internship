import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/resources/services/product.service';
import { Product } from '../core/resources/models/product.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Cart } from '../core/resources/models/cart.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
@UntilDestroy()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // products!: Observable<{ products: Product[] }>;
  products: Product[] = [];
  cartItems: Cart[] = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private store: Store<{ cart: { products: Product[] } }>
  ) {}

  ngOnInit(): void {
    // this.store.select('cart').subscribe();
    this.loadCartItems();
  }

  loadProducts(cartItems: Cart[]) {
    for (let cartItem of cartItems) {
      this.productService
        .getProduct(cartItem.productId)
        .pipe(untilDestroyed(this))
        .subscribe({
          next: (product) => {
            this.products.push(product);
          },
          error: (error) => {
            console.error(
              `Error while getting product's data for cart. Maybe no product with such id: ${cartItem.productId}  \nerror: ${error}`
            );
          },
        });
    }
  }

  loadCartItems() {
    this.productService
      .getCart()
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (cartItems) => {
          this.loadProducts(cartItems);
        },
        error: (error) => {
          console.error("Error while getting cart's data. " + error);
        },
      });
  }
}
