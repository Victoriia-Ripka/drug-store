import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html'
})
export class FaqPageComponent {
  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackgroundColor('white');
  }
}
