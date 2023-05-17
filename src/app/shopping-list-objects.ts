export interface ShoppingItem {
  homeView?: boolean;
  category?: string;
  photo?: string;
  name?: string;
  price?: number;
  quantity?: number;
  hasDiscount?: string;
  // discount?: number;
  disount?: number;
  totalPrice?:number;
  description?: string;
  expiryDate?: string;
  expiryDateObject?: Date;
  timeRemaining?: string;
  isExpiringSoon?: string;
}
