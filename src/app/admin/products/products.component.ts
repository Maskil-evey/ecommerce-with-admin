import { Component, OnInit } from '@angular/core';
import { ExpiryService } from 'src/app/expiry.service';
import { ShoppingItemService } from 'src/app/shopping-item.service';
import { ShoppingItem } from 'src/app/shopping-list-objects';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:ShoppingItemService, private expire:ExpiryService) { }

  allProducts:ShoppingItem[] =[]
  selectedItem:ShoppingItem ={}
  expiringSoon:number = 0
  expired:number = 0
  ngOnInit(): void {
    this.allProducts = this.service.shoppingItems

    for(let product of this.allProducts){
      this.expire.parseExpiryDate(product)
      if(product.isExpiringSoon=='Expiring Soon'){
        // number of all products expiring soon
        this.expiringSoon += 1
      }
      if(product.isExpiringSoon == 'Expired'){
        this.expired +=1
      }
    }
    this.service.saveData();
  }
  // callOnit(){
  //   this.ngOnInit()
  // }
select(i:any){
  this.selectedItem  = i;
  console.log(  this.selectedItem.photo)
}
update(){
  this.service.saveData();
  setTimeout(() => {
    window.location.reload()
  }, 1600);
}

// delete product by index
delete(i:any){
  this.allProducts.splice(i,1)
  this.service.saveData();
  window.location.reload();
}




onFileChange(event:any) {
  const file = event.target.files[0];
  this.readFile(file);
}
readFile(file: File) {
  const reader = new FileReader();
  reader.onload = (event: any) => {
    this.selectedItem.photo = event.target.result as string;
    console.log(event.target.result)
  };
  reader.readAsDataURL(file);
}
}
