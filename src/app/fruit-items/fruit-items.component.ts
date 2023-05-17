import { CartServiceService } from './../cart-service.service';
import { ShoppingItem } from './../shopping-list-objects';
import { ShoppingItemService } from './../shopping-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-items',
  templateUrl: './fruit-items.component.html',
  styleUrls: ['./fruit-items.component.css']
})
export class FruitItemsComponent implements OnInit {
  constructor(private shoppingItemService:ShoppingItemService, private cartService:CartServiceService) { }
  fruitItems:ShoppingItem[] = []
  ngOnInit(): void {
    this.fruitItems = this.shoppingItemService.fruitItems
  }
  addToCart(item:ShoppingItem){
    this.cartService.addToCart(item)
    console.log(this.cartService)
  }
}
