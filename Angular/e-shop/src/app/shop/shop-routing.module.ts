import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from '../core/resources/services/data-resolver.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', component: ProductListComponent },
      {
        path: 'edit/:id',
        component: ProductFormComponent,
        resolve: { product: DataResolver },
      },
      { path: 'add', component: ProductFormComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
