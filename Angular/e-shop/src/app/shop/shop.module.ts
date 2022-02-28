import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductListComponent,
    FilterComponent,
    ProductFormComponent,
  ],
  imports: [RouterModule, ShopRoutingModule, SharedModule, ReactiveFormsModule],
  exports: [],
})
export class ShopModule {}