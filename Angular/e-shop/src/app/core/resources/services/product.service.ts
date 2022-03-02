import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Product } from 'src/app/core/resources/models/product.model';
import { URL } from 'src/app/shared/components/constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private PRODUCT_URL = URL + '/products';

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

  getProducts() {
    return this.http
      .get<Product[]>(this.PRODUCT_URL)
      .pipe(catchError(this.handleError));
  }
}
