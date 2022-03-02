import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Product } from 'src/app/core/resources/models/product.model';
import { URL } from 'src/app/shared/constants';
import { handleError } from 'src/app/shared/utils';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private PRODUCT_URL = URL + '/products';

  constructor(private http: HttpClient) {}

  addProduct(product: Product) {
    return this.http
      .post(this.PRODUCT_URL, product)
      .pipe(catchError(handleError));
  }

  getProduct(id: number) {
    return this.http
      .get<Product>(this.PRODUCT_URL + '/' + id)
      .pipe(catchError(handleError));
  }

  getProducts() {
    return this.http
      .get<Product[]>(this.PRODUCT_URL)
      .pipe(catchError(handleError));
  }

  updateProduct(id: number, product: Product) {
    console.log(product);
    return this.http
      .put(this.PRODUCT_URL + '/' + id, product)
      .pipe(catchError(handleError));
  }

  deleteProduct(id: number) {
    return this.http
      .delete(this.PRODUCT_URL + '/' + id)
      .pipe(catchError(handleError));
  }
}
