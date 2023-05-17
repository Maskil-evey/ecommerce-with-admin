import { CartServiceService } from './../cart-service.service';
import { ShoppingItem } from './../shopping-list-objects';
import { ShoppingItemService } from './../shopping-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dairy-items',
  templateUrl: './dairy-items.component.html',
  styleUrls: ['./dairy-items.component.css']
})
export class DairyItemsComponent implements OnInit {

  constructor(private shoppingItemService:ShoppingItemService, private cartService:CartServiceService) { }
  dairyItems:ShoppingItem[] = []
  ngOnInit(): void {
    this.dairyItems = this.shoppingItemService.dairyItems;
  }
  addToCart(item:ShoppingItem){
    this.cartService.addToCart(item)
    console.log(this.cartService)
  }

}
