import { Component } from '@angular/core';
import { products } from 'src/app/data/product';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  
})
export class ShoppingListComponent {
  products = products

}
