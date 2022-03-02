import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { URL } from 'src/app/shared/constants';
import { handleError } from 'src/app/shared/utils';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private CART_URL = URL + '/cart';

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    let cartItem = this.mapCartItem(Number(product.id));
    return this.http
      .post(this.CART_URL, cartItem)
      .pipe(catchError(handleError));
  }

  getCart() {
    return this.http.get<Cart[]>(this.CART_URL).pipe(catchError(handleError));
  }

  private mapCartItem(id: number): Cart {
    return <Cart>{
      productId: id,
      count: 1,
      user: 'user',
    };
  }
}
