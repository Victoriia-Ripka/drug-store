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
  selectedSortOption: string = 'all'

  pageSize: number = 9
  currentPage: number = 1

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData()
  }

  selectCategory(category: string) {
    this.selectedCategory = category
    this.loadData()
  }

  selectSortOption(option: string) {
    this.selectedSortOption = option
    this.loadData()
  }

  loadData() {
    this.dataService.getData().subscribe((data) => {
      if (this.selectedCategory !== 'All Products') {
        this.products = data.filter(item => item.category === this.selectedCategory)
      }

      switch (this.selectedSortOption) {
        // case 'average':
          // what is avarage
          // data = data.sort((a, b) => a.price - b.price)
          // break
        case 'popular':
          data = data.sort((a, b) => a.popular - b.popular)
          break
        case 'cheapest':
          data = data.sort((a, b) => a.price - b.price)
          break
        case 'expensive':
          data = data.sort((a, b) => b.price - a.price)
          break
      }

      this.products = data
      this.producrsAmount = this.products.length
    });
  }
}
