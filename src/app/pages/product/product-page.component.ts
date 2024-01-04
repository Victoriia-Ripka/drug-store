import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackgroundColor('white');
  }
}
