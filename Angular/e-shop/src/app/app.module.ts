import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './shop/filter/filter.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductComponent } from './shop/product-list/product/product.component';
import { SectionComponent } from './sidebar/section/section.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, FooterComponent, ShopComponent, CartComponent, FilterComponent, ProductListComponent, ProductComponent, SectionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
