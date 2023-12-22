import { Component } from '@angular/core';
import { DataService } from 'src/app/services';
import { categoriesList } from 'src/app/data';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  categories = categoriesList
  products: any[] = []
  producrsAmount: number = 0
  selectedCategory: string = 'All Products'

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.dataService.getData().subscribe((data) => {
      this.products = data;
      this.producrsAmount = data.length
    });
  }
}
