import { Action } from '@ngrx/store';
import { Product } from '../../core/resources/models/product.model';
import * as CartActions from './cart.actions';

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export function cartReducer(
  state = initialState,
  action: CartActions.AddProductToCart
): CartState {
  switch (action.type) {
    case CartActions.ADD_PRODUCT: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
