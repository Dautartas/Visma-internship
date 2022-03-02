import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { URL } from 'src/app/shared/components/constants';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private CART_URL = URL + '/cart';

  constructor(private http: HttpClient) {}
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Uknown error!';
    if (error.error instanceof ErrorEvent) {
      //client side
      errorMessage = `Error: ${error.error.message}`;
    } else {
      //server side
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  addToCart(product: Product) {
    let cartItem = this.mapCartItem(Number(product.id));
    return this.http
      .post(this.CART_URL, cartItem)
      .pipe(catchError(this.handleError));
  }

  getCart() {
    return this.http
      .get<Cart[]>(this.CART_URL)
      .pipe(catchError(this.handleError));
  }

  private mapCartItem(id: number): Cart {
    return <Cart>{
      productId: id,
      count: 1,
      user: 'user',
    };
  }
}
