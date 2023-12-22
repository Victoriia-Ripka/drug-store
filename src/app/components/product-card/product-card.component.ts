import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  title: string = ''
  @Input()
  substance: string = ''
  @Input()
  price: number = 0
  @Input()
  id: number = 0

  constructor(private router: Router) { }

  goToProductDetail(id: number) {
    this.router.navigate(['/products', id]);
  }
}
