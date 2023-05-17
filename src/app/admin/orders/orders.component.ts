import { Component, OnInit } from '@angular/core';
import { ShoppingItemService } from 'src/app/shopping-item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service:ShoppingItemService) { }

  ngOnInit(): void {
    this.service.saveData();
  }
  products: Product[] = [
    { name: 'Milk', price: 1.99, expiryDate: '2023-05-31' },
    { name: 'Eggs', price: 2.99, expiryDate: '2023-07-10' },
    { name: 'Bread', price: 3.99, expiryDate: '2023-05-15' },
  ];

  parseExpiryDate(product: Product): void {
    product.expiryDateObject = new Date(product.expiryDate);
    const currentDate = new Date();
    const timeRemaining = this.getTimeRemaining(currentDate, product.expiryDateObject);
    product.timeRemaining = this.formatTimeRemaining(timeRemaining);
    product.isExpiringSoon = this.isExpiringSoon(product.expiryDateObject);
  }

  private getTimeRemaining(currentDate: Date, expiryDate: Date): number {
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }

  private formatTimeRemaining(timeRemaining: number): string {
    if (timeRemaining <= 0) {
      return 'Expired';
    } else if (timeRemaining === 1) {
      return '1 day to expire';
    } else if (timeRemaining <= 30) {
      return `${timeRemaining} days to expire`;
    } else {
      const months = Math.floor(timeRemaining / 30);
      return `${months} months to expire`;
    }
  }

  private isExpiringSoon(expiryDate: Date): boolean {
    const currentDate = new Date();
    const oneMonthAhead = new Date();
    oneMonthAhead.setMonth(currentDate.getMonth() + 1);
    return expiryDate < oneMonthAhead;
  }

}


interface Product {
  name: string;
  price: number;
  expiryDate: string;
  expiryDateObject?: Date;
  timeRemaining?: string;
  isExpiringSoon?: boolean;
}