import { CartServiceService } from './../cart-service.service';
import { ShoppingItem } from './../shopping-list-objects';
import { ShoppingItemService } from './../shopping-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetable-items',
  templateUrl: './vegetable-items.component.html',
  styleUrls: ['./vegetable-items.component.css']
})
export class VegetableItemsComponent implements OnInit {

  constructor(private shoppingItemService:ShoppingItemService, private cartService: CartServiceService) { }
  vegetableItems:ShoppingItem[] = []
  ngOnInit(): void {
    this.vegetableItems = this.shoppingItemService.vegetabaleItems;
    console.log(this.vegetableItems);
  }
  addToCart(item:ShoppingItem){
    this.cartService.addToCart(item)
    console.log(this.cartService)
  }
}
