import { Component } from '@angular/core';
import { DataService } from 'src/app/services';
import { categoriesList } from 'src/app/data';
// import { PaginationControlsDirective } from 'ngx-pagination';

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

  pageSize: number = 9
  currentPage: number = 1

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData()
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe((data) => {
      if (this.selectedCategory !== 'All Products') {
        this.products = data.filter(item => item.category === this.selectedCategory);
      } else {
        this.products = data;
      }

      this.producrsAmount = this.products.length;
    });
  }
}
