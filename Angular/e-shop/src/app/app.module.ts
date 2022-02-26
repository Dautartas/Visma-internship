import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './shop/filter/filter.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductComponent } from './shop/product-list/product/product.component';
import { SidebarSectionComponent } from './core/sidebar/sidebar-section/sidebar-section.component';
import { ProductFormComponent } from './shop/product-form/product-form.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { AuthInterceptorService } from './core/resources/services/auth-interceptor.service';
import { AlertComponent } from './shared/components/alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ShopComponent,
    CartComponent,
    FilterComponent,
    ProductListComponent,
    ProductComponent,
    SidebarSectionComponent,
    ProductFormComponent,
    NotFoundComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
