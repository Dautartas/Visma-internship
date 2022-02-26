import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from './core/resources/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // alertMessage: string = '';

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.loadProducts();
    this.productService.loadCart();
  }

  // alertClose() {
  //   this.alertMessage = '';
  // }
}
