import { CartServiceService } from './../cart-service.service';
import { ShoppingItem } from './../shopping-list-objects';
import { ShoppingItemService } from './../shopping-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spice-items',
  templateUrl: './spice-items.component.html',
  styleUrls: ['./spice-items.component.css']
})
export class SpiceItemsComponent implements OnInit {

  constructor(private shoppingItemService:ShoppingItemService, private cartService: CartServiceService) { }
  spiceItems:ShoppingItem[] = []
  ngOnInit(): void {
    this.spiceItems = this.shoppingItemService.spiceItems;
  }
  addToCart(item:ShoppingItem){
    this.cartService.addToCart(item)
    console.log(this.cartService)
  }
}
