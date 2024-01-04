import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss']
})
export class BestsellersComponent {
  constructor(private router: Router) { }

  goToProductDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}
