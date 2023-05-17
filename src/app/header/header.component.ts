import { CartServiceService } from './../cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService:CartServiceService) { }
  // cartAmount = this.cartService.cartAmount;
  cart = this.cartService;

  ngOnInit(): void {
  }

}
