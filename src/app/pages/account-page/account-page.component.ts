import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent {
  constructor(private backgroundService: BackgroundService) { }
  selectedAccountItem: string = 'track-order'

  ngOnInit() {
    this.backgroundService.setBackgroundColor('white');
  }

  selectAccountItem(item: string): void {
    this.selectedAccountItem = item
  }
}
