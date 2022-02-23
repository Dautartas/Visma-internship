import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/core/resources/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSelected = new Subject<Product>();
  private products: Product[] = [
    new Product(1, 'Product', 3, '../../../assets/hat.png', true),
    new Product(2, 'Product', 3, '../../../assets/pants.png', true),
    new Product(3, 'Product', 3, '../../../assets/shoes.png', true),
    new Product(4, 'Product', 3, '../../../assets/hat.png', true),
    new Product(5, 'Product', 3, '../../../assets/shoes.png', true),
    new Product(6, 'Product', 3, '../../../assets/pants.png', true),
    new Product(7, 'Product', 3, '../../../assets/tshirt.png', true),
    new Product(8, 'Product', 3, '../../../assets/hat.png', true),
    new Product(9, 'Product', 3, '../../../assets/shoes.png', true),
    new Product(10, 'Product', 3, '../../../assets/pants.png', true),
  ];

  private cart: Product[] = [
    new Product(11, 'Product', 3, '../../../assets/hat.png', true),
  ];
  constructor() {}

  getProducts() {
    return this.products.slice();
  }
  getProduct(id: number): Product {
    return this.products.find((p) => p.id == id)!;
  }

  getCart() {
    return this.cart.slice();
  }

  getProductSelected() {
    return this.productSelected;
  }

  addProduct(product: Product) {
    console.log(product);
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
    console.log(product);
  }
}
