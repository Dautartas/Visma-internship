import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule],
  exports: [ProductComponent, CommonModule],
})
export class SharedModule {}
