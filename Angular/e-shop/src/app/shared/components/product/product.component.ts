import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/core/resources/services/product.service';
import { Product } from '../../../core/resources/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() isInCart: boolean = false;
  @Output() addedToCart = new EventEmitter<Product>();
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onAddToCart() {
    this.addedToCart.emit(this.product);
    // this.productService.addToCart(this.product.id!).subscribe({
    //   next: () => {},
    //   error: (error) => {
    //     alert('Error adding product to cart');
    //   },
    //   complete: () => {
    //     this.productService.loadCart();
    //     alert('Product added to cart.');
    //   },
    // });
  }

  onRemoveFromCart() {
    alert('Removed');
    // this.productService.addToCart(this.product.id!).subscribe({
    //   next: () => {},
    //   error: (error) => {
    //     alert('Error removing product from cart');
    //   },
    //   complete: () => {
    //     this.productService.loadCart();
    //     alert('Product removed from cart.');
    //   },
    // });
  }

  onEditClick() {
    this.router.navigate(['edit', this.product.id], { relativeTo: this.route });
  }
}
