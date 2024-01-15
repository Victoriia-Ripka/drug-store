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
  query: string = ''
  selectedCategory: string = 'All Products'
  selectedSortOption: string = 'all'
  isOpenedCategoriesModal: boolean = false

  pageSize: number = 9
  currentPage: number = 1

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['category'] || params['query']) {
        this.selectCategoryAndSearchQuery(params['category'], params['query'])
      } else {
        this.loadData()
      }
    })
  }

  selectCategoryInModal(selectedCategory: string) {
    this.selectedCategory = selectedCategory
    this.selectCategoryAndSearchQuery(this.selectedCategory, this.query)
  }

  selectCategoryAndSearchQuery(category: string, query: string = '') {
    this.query = query.toLowerCase()
    this.selectedCategory = category
    this.router.navigate(['/products'], { queryParams: { category: category, query: this.query } })
    this.loadData(query)
  }

  selectSortOption(option: string) {
    this.selectedSortOption = option
    this.loadData()
  }

  loadData(query: string = '') {
    this.dataService.getData().subscribe((data) => {
      let interData = data
      if (this.selectedCategory !== 'All Products') {
        interData = data.filter(item => item.category === this.selectedCategory)
      }

      if (query !== '') {
        const filteredData = interData.filter(product => product.title.toLowerCase().includes(query))
        interData = filteredData
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
    })
  }

  toggleCategoriesModal(): void {
    this.isOpenedCategoriesModal = !this.isOpenedCategoriesModal
  }
}
