import { Injectable, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/resources/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSelected = new EventEmitter<Product>();
  private products: Product[] = [
    new Product('Product', 3, '../../../assets/hat.png', true),
    new Product('Product', 3, '../../../assets/pants.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/hat.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/pants.png', true),
    new Product('Product', 3, '../../../assets/tshirt.png', true),
    new Product('Product', 3, '../../../assets/hat.png', true),
    new Product('Product', 3, '../../../assets/shoes.png', true),
    new Product('Product', 3, '../../../assets/pants.png', true),
  ];

  private cart: Product[] = [
    new Product('Product', 3, '../../../assets/hat.png', true),
  ];
  constructor() {}

  getProducts() {
    return this.products.slice();
  }
  getProduct(id: number) {
    return this.products[0]; //FIXME:
    //return this.products.find(p=>p.id == id)
  }

  getCart() {
    return this.cart.slice();
  }

  getProductSelected() {
    return this.productSelected;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  addProductToCart(product: Product) {
    this.cart.push(product);
  }

  deleteProduct(id: number) {
    console.log('Product with id ' + id + ' was deleted.');
  }

  updateProduct(product: Product) {
    console.log('Product was updated.');
  }
}
