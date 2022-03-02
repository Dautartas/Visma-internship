import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, ReplaySubject, Subject, throwError } from 'rxjs';
import { Product } from 'src/app/core/resources/models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  error = new Subject<string>();
  private products$: ReplaySubject<Product[]> = new ReplaySubject<Product[]>();
  private cart$: ReplaySubject<Cart[]> = new ReplaySubject<Cart[]>();

  private url = 'http://localhost:3000';
  private PRODUCT_URL = this.url + '/products';
  private CART_URL = this.url + '/cart';

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

  addProduct(product: Product) {
    return this.http
      .post(this.PRODUCT_URL, product)
      .pipe(catchError(this.handleError));
  }

  getProduct(id: number) {
    return this.http
      .get<Product>(this.PRODUCT_URL + '/' + id)
      .pipe(catchError(this.handleError));
  }

  updateProduct(id: number, product: Product) {
    console.log(product);
    return this.http
      .put(this.PRODUCT_URL + '/' + id, product)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(id: number) {
    return this.http
      .delete(this.PRODUCT_URL + '/' + id)
      .pipe(catchError(this.handleError));
  }

  mapCartItem(id: number) {
    return <Cart>{
      productId: id,
      count: 1,
      user: 'user',
    };
  }

  addToCart(id: number) {
    let cartItem = this.mapCartItem(id);
    return this.http
      .post(this.CART_URL, cartItem)
      .pipe(catchError(this.handleError));
  }

  loadProducts() {
    this.http.get<Product[]>(this.PRODUCT_URL).subscribe((products) => {
      this.products$.next(products);
    });
  }

  getProducts() {
    return this.products$.pipe(catchError(this.handleError));
  }

  loadCart() {
    this.http.get<Cart[]>(this.CART_URL).subscribe((products) => {
      this.cart$.next(products);
    });
  }

  getCart() {
    return this.cart$.pipe(catchError(this.handleError));
  }

  removeFromCart(id: number) {
    return this.http
      .delete(this.CART_URL + '/' + id)
      .pipe(catchError(this.handleError));
  }
}
