import { ShipOutComponent } from './ship-out/ship-out.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DairyItemsComponent } from './dairy-items/dairy-items.component';
import { MeatItemsComponent } from './meat-items/meat-items.component';
import { SpiceItemsComponent } from './spice-items/spice-items.component';
import { FruitItemsComponent } from './fruit-items/fruit-items.component';
import { VegetableItemsComponent } from './vegetable-items/vegetable-items.component';
import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DashboardComponent } from './admin/all-dashboard/all-dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { LogInComponent } from './admin/log-in/log-in.component';

const routes: Routes = [
  {path:'',
  component: ShoppingHomeComponent },
  {path:'shopping?category=vegetables',
  component: VegetableItemsComponent},
  {path:'shopping?category=fruits',
  component: FruitItemsComponent},
  {path:'shopping?category=spice',
  component: SpiceItemsComponent},
  {path:'shopping?category=meat',
  component: MeatItemsComponent},
  {
    path: 'shopping?category=dairy',
    component: DairyItemsComponent
  },
  {
    path:'shoppingcart',
    component:ShoppingCartComponent
  },
  {
    path:'check-out',
    component: CheckOutComponent
  },
  {
    path:'order-out',
    component:ShipOutComponent
  },
  {
    path:'admin',
    component:DashboardComponent
  },
  {
    path:'admin/products',
    component:ProductsComponent
  },
  {
    path:'admin/orders',
    component:OrdersComponent
  },
  {
    path:'admin/customers',
    component:CustomersComponent
  },
  {
    path:'log-in',
    component:LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
