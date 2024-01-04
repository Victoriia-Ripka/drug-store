import { Component } from '@angular/core';
import { DataService } from 'src/app/services';
import { categoriesList } from 'src/app/data';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

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

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['category']) {
        const category = params['category']
        this.selectCategory(category)
      } else {
        this.loadData();
      }
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category
    this.router.navigate(['/products'], { queryParams: { category: category } })
    this.loadData()
  }

  selectSortOption(option: string) {
    this.selectedSortOption = option
    this.loadData()
  }

  loadData() {
    this.dataService.getData().subscribe((data) => {
      let interData = data
      if (this.selectedCategory !== 'All Products') {
        interData = data.filter(item => item.category === this.selectedCategory)
      }

      switch (this.selectedSortOption) {
        // case 'average':
          // what is avarage
          // data = data.sort((a, b) => a.price - b.price)
          // break
        case 'popular':
          interData = interData.sort((a, b) => a.popular - b.popular)
          break
        case 'cheapest':
          interData = interData.sort((a, b) => a.price - b.price)
          break
        case 'expensive':
          interData = interData.sort((a, b) => b.price - a.price)
          break
      }

      this.products = interData
      this.producrsAmount = this.products.length
    });
  }
}
