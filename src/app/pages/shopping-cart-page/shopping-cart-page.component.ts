import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent {
  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackgroundColor('white');
  }
}
