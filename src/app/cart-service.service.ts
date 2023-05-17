import { CartItem } from './cart-list-objects';
import { ShoppingItem } from './shopping-list-objects';
import { Injectable } from '@angular/core';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  // category: string[] = ["Vegetable", "Fruits", "Dairy", "Meat", "Spice"]
  constructor() { }



  cartItems:CartItem[] =[];
  cart = 0;
  totalPrice = 0;
  itemMessage = `Your Cart is Empty`
  // find:ShoppingItem|undefined;
 addToCart(item:ShoppingItem){
    var currentItem = this.cartItems.find((cartItem)=>cartItem.name === item.name);
    if(currentItem){
      currentItem.quantity++;
      currentItem.price += item.price?item.price:0;
      this.totalPrice += item.price?item.price:0;
    }else{
      var cartItem:CartItem = {
        category:item.category?item.category:'',
        photo:item.photo?item.photo:'',
        name:item.name?item.name:'',
        price:item.price?item.price:0,
        quantity:1,
        productPrice: item.price
      }
      item.quantity = 1;

      this.cartItems.push(cartItem);
      // this.find = item;
      // this.find.quantity = 1;
      this.totalPrice += item.price?item.price:0;
    }
    this.cart++;
    this.itemMessage = `You have ${this.cart} Item in you Cart`
 }
 removeQuantity(item:CartItem){
    var currentItem = this.cartItems.find((cartItem)=>cartItem.name === item.name);
    if(currentItem){
      currentItem.quantity--;
      currentItem.price -= currentItem.productPrice || 0;
      this.cart--;
      if(this.cart === 0){
        this.itemMessage = `You Cart is Empty`
      }
      else{this.itemMessage = `You have ${this.cart} Item in you Cart`}
      this.totalPrice -= currentItem.productPrice || 0;
      if(currentItem?.quantity === 0){
        this.cartItems.splice(this.cartItems.indexOf(currentItem),1);
      }
    }

 }

 clearCart(){
    this.cartItems.splice(0,this.cartItems.length);
    this.cart = 0;
    this.totalPrice = 0;
 }
 addQuantity(item:CartItem){
    var currentItem = this.cartItems.find((cartItem)=>cartItem.name === item.name);
    if(currentItem){
      currentItem.quantity++;
      currentItem.price += currentItem.productPrice || 0;
      this.cart++;
      this.itemMessage = `You have ${this.cart} Item in you Cart`
      this.totalPrice += currentItem.productPrice || 0;
    }
 }

}
