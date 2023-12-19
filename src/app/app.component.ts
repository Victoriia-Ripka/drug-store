import { Component } from '@angular/core';
import { BackgroundService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  backgroundColor: string = '#F2F5F9';
  title: string = 'Canadian Drug Store';

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.color$.subscribe((color) => {
      this.backgroundColor = color;
    });
  }
}
