import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ScrollService } from '../../services/scroll.service';
import { categoriesList } from 'src/app/data';

const languages = [
  { value: 'german', label: 'German', img: 'germany.png', currency: "EURO" },
  { value: 'polish', label: 'Polish', img: 'poland.png', currency: "PLN" },
  { value: 'japanese', label: 'Japanese', img: 'japan.png', currency: "JPY" },
  { value: 'english', label: 'English', img: 'united-states.png', currency: "USD" },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categories = categoriesList
  isMenuOpened = false
  isAuthorizedUser: boolean = true
  isModalOpen: boolean = false
  query: string = ''
  category: string = ''
  private destroy$ = new Subject<void>()
  selectedCurrency: string = 'USD'
  languages: Array<any> = languages
  selectedLanguageImg: string = 'united-states.png';

  itemsList: Array<any> = [
    {
      id: 1,
      title: "Dutas",
      count: 1,
      price: 23.30,
      dose: '10 pills x 0.5mg'
    },
    {
      id: 2,
      title: "Dutas",
      count: 1,
      price: 23.30,
      dose: '10 pills x 0.5mg'
    },
    {
      id: 3,
      title: "Dutas",
      count: 1,
      price: 23.30,
      dose: '10 pills x 0.5mg'
    }
  ]
  itemQuantity: number = this.itemsList.length

  constructor(private router: Router, private route: ActivatedRoute, private scrollService: ScrollService) {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlTree = this.router.parseUrl(event.url)
        const fragment = urlTree.fragment || ''
        this.handleNavigationEnd(event.url, fragment)
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['category']) {
        this.category = params['category']
      }
      if (params['query']) {
        this.query = params['query']
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  toggleMenu() {
    console.log("clicked")
    this.isMenuOpened != this.isMenuOpened
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen
  }

  selectLanguage(language: any): void {
    this.selectedLanguageImg = language;
  }

  selectCurrency(currency: any): void {
    this.selectedCurrency = currency;
  }

  navigateToTestimonials() {
    this.router.navigate([''], { fragment: 'testimonials' })
  }

  goToProductsPage(category: string): void {
    this.category = category
    this.router.navigate(['/products'], { queryParams: { category: category, query: this.query.toLowerCase() } })
  }

  search(): void {
    this.router.navigate(['/products'], { queryParams: { category: this.category, query: this.query.toLowerCase() } })
  }

  deleteProductFromCart(id: number): void {
    const index = this.itemsList.findIndex(
      product => product.id === id
    );
    this.itemsList.splice(index, 1)
    this.itemQuantity = this.itemsList.length
  }


  private handleNavigationEnd(url: string, fragment: string) {
    if (fragment) {
      this.scrollService.scrollToSection(fragment)
    }
  }
}


