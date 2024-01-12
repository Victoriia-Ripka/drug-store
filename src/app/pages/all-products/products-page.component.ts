import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services';

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent {
  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackgroundColor('white');
  }
}
