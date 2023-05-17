import { Injectable } from '@angular/core';
import { ShoppingItem } from './shopping-list-objects';

@Injectable({
  providedIn: 'root'
})
export class ExpiryService {

  constructor() { }
 // Expiry Check
parseExpiryDate(product: ShoppingItem): void {
  product.expiryDateObject = new Date(product.expiryDate!);
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

private isExpiringSoon(expiryDate: Date){
  const currentDate = new Date();
  const oneMonthAhead = new Date();
  oneMonthAhead.setMonth(currentDate.getMonth() + 1);
// check if its expired or expiring soon
  if(expiryDate < currentDate ){
    return 'Expired'
  }
  else if(expiryDate < oneMonthAhead){
    return 'Expiring Soon'
  }
  else{
    return ''
  }
}
}
