import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ProductFormComponent } from './shop/product-form/product-form.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'edit/:id', component: ProductFormComponent },
      { path: 'add', component: ProductFormComponent },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
