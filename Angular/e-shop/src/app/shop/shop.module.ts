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
import { FormErrorDirective } from './product-form/form-error.directive';
import { ControlErrorComponent } from './product-form/control-error/control-error.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductListComponent,
    FilterComponent,
    ProductFormComponent,
    FormErrorDirective,
    ControlErrorComponent,
  ],
  imports: [RouterModule, ShopRoutingModule, SharedModule, ReactiveFormsModule],
  exports: [],
})
export class ShopModule {}
