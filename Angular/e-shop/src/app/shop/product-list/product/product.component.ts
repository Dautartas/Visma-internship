import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/core/resources/services/product.service';
import { Product } from '../../../core/resources/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() productClicked = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onProductClick() {
    this.productService.getProductSelected().emit(this.product);
  }
  onAddToCart() {
    this.productService.addProductToCart(this.product);
  }
}
