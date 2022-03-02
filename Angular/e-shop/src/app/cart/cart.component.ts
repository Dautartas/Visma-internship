import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/resources/services/cart.service';
import { Product } from '../core/resources/models/product.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Cart } from '../core/resources/models/cart.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from '../core/resources/services/product.service';
@UntilDestroy()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  selectedProducts: Product[] = [];
  cartItems: Cart[] = [];
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) // private store: Store<{ cart: { products: Product[] } }>
  {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(untilDestroyed(this))
      .subscribe((products) => {
        this.cartService
          .getCart()
          .pipe(untilDestroyed(this))
          .subscribe((cartItems) => {
            const PRODUCT_IDS = cartItems.map((cartItem) => cartItem.productId);
            this.selectedProducts = products.filter(
              (product) => PRODUCT_IDS.indexOf(Number(product.id)) > -1
            );
          });
      });
  }
}
