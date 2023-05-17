import { Router, RouterModule, Routes } from '@angular/router';
import { CartItem } from './../cart-list-objects';
import { CartServiceService } from './../cart-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private cartService: CartServiceService, private router:Router) {}
  orderedItems:CartItem [] = []
  cart = this.cartService;
  @ViewChild('loader', {read:ElementRef,static:true})loader!:ElementRef

  ngOnInit(): void {
    this.orderedItems = this.cartService.cartItems;
    console.log(this.loader)

  }

  placeOrder(){
    this.loader.nativeElement.style.display = 'block';
  setTimeout(() => {
    this.loader.nativeElement.style.display = 'none';
    this.router.navigate(['/order-out'])
    this.cart.cart = 0;
  }, 3500);
  }

}
