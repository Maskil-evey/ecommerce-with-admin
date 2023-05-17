import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';
import { VegetableItemsComponent } from './vegetable-items/vegetable-items.component';
import { FruitItemsComponent } from './fruit-items/fruit-items.component';
import { MeatItemsComponent } from './meat-items/meat-items.component';
import { SpiceItemsComponent } from './spice-items/spice-items.component';
import { DairyItemsComponent } from './dairy-items/dairy-items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShipOutComponent } from './ship-out/ship-out.component';
import { DashboardComponent } from './admin/all-dashboard/all-dashboard.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header/admin-header.component';
import { ProductsComponent } from './admin/products/products.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './admin/log-in/log-in.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingHomeComponent,
    VegetableItemsComponent,
    FruitItemsComponent,
    MeatItemsComponent,
    SpiceItemsComponent,
    DairyItemsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ShipOutComponent,
    DashboardComponent,
    AdminHeaderComponent,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
