import { CartServiceService } from './../cart-service.service';
import { ShoppingItemService } from './../shopping-item.service';
import { ShoppingItem } from './../shopping-list-objects';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-home',
  templateUrl: './shopping-home.component.html',
  styleUrls: ['./shopping-home.component.css']
})
export class ShoppingHomeComponent implements OnInit {

  constructor( private shoppingItemsService:ShoppingItemService,private cartService:CartServiceService) {}
  shoppingItems: ShoppingItem[] = [];

  ngOnInit(): void {
    this.shoppingItems = this.shoppingItemsService.allCategories;

  }
  addToCart(item:ShoppingItem){
    this.cartService.addToCart(item);
  }

}
