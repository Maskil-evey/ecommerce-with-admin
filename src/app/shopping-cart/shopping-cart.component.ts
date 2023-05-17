import { Router } from '@angular/router';
import { CartItem } from './../cart-list-objects';
import { ShoppingItem } from './../shopping-list-objects';
import { CartServiceService } from './../cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService:CartServiceService, private router:Router) { }
  cart = this.cartService
  cartEmptyMessage = 'Your Cart is Empty';

  cartItems:CartItem[] = []
  // cartAmount = this.cartService.cartAmount;
  removeQuantity(item:CartItem){
    this.cartService.removeQuantity(item)
  }
  clearCart(){
    this.cartService.clearCart();
  }
  addQuantity(item:CartItem){
    this.cartService.addQuantity(item)
  }
  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
  }
  checkOut(){
    if(this.cart.cartItems.length > 0){
      this.router.navigate(['/check-out']);
    }
    else{
      alert("Your cart is empty");
    }
   }

}
