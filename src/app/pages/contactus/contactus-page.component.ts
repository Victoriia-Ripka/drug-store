import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services';

@Component({
  selector: 'app-contactus-page',
  templateUrl: './contactus-page.component.html'
})
export class ContactusPageComponent {
  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackgroundColor('#F2F5F9');
  }
}
