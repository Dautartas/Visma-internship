import { Action } from '@ngrx/store';
import { Product } from 'src/app/core/resources/models/product.model';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_CART = 'GET_CART';

export class AddProductToCart implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class GetCart implements Action {
  readonly type = GET_CART;
  constructor(public payload: Product) {}
}
