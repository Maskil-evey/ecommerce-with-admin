import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef, AfterViewInit} from '@angular/core';
import { ShoppingItem } from 'src/app/shopping-list-objects';
import { ShoppingItemService } from '../../../shopping-item.service';
import { ProductsComponent } from '../../products/products.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  product:ShoppingItem = {}
  constructor(private service:ShoppingItemService) { }
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('img',{read:ElementRef}) img!: ElementRef;
  // @ViewChild(ProductsComponent,{static:true}) component!: ProductsComponent
  ngOnInit(): void {
    
  }
  
  onFileChange(event:any) {
    const file = event.target.files[0];
    this.readFile(file);
  }
  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.product.photo = event.target.result as string;
      console.log(event.target.result)
    };
    reader.readAsDataURL(file);
  }
  
  submitForm() {
    // Save product to local storage
    this.service.shoppingItems.unshift(this.product)
    this.product = {};
    this.service.saveData();    
    // reload windows
    setTimeout(() => {
      window.location.reload();
    }, 1600);
    }
  
}
