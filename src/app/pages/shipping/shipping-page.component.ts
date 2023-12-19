import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services/index';

@Component({
  selector: 'app-shipping-page',
  templateUrl: './shipping-page.component.html'
})
export class ShippingPageComponent {
  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackgroundColor('white');
  }
}
