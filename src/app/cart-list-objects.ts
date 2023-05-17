export interface CartItem {
  category: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  hasDiscount?: boolean;
  disount?: number;
  totalPrice?:number;
  productPrice?:number;

}
