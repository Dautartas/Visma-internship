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
  @Output() productClicked = new EventEmitter<void>();

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onAddToCart() {
    this.productService.addProductToCart(this.product.id!);
  }

  onEditClick() {
    this.router.navigate(['edit', this.product.id], { relativeTo: this.route });
  }
}
