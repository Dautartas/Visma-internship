import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<Product> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    return this.productService.getProduct(Number(route.paramMap.get('id')));
  }
}
