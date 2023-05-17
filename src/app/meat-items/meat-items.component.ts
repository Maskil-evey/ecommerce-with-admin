import { CartServiceService } from './../cart-service.service';
import { ShoppingItem } from './../shopping-list-objects';
import { ShoppingItemService } from './../shopping-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meat-items',
  templateUrl: './meat-items.component.html',
  styleUrls: ['./meat-items.component.css']
})
export class MeatItemsComponent implements OnInit {

  constructor(private shoppingItemService:ShoppingItemService, private cartService: CartServiceService) { }
  meatItems:ShoppingItem[] = []
  ngOnInit(): void {
    this.meatItems = this.shoppingItemService.meatItems;
  }
  addToCart(item:ShoppingItem){
    this.cartService.addToCart(item)
    console.log(this.cartService)
  }

}
