import { Component } from '@angular/core';
import { categoriesList } from 'src/app/data';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  categories = categoriesList
}
