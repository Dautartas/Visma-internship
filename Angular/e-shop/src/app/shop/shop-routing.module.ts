import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../core/resources/services/can-deacticate-guard.service';
import { ProductResolver } from '../core/resources/services/product-resolver.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      { path: '', component: ProductListComponent },
      {
        path: 'edit/:id',
        component: ProductFormComponent,
        resolve: { product: ProductResolver },
        canDeactivate: [CanDeactivateGuard],
      },
      {
        path: 'add',
        component: ProductFormComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
