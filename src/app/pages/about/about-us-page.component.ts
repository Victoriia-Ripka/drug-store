import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services';

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html'
})
export class AboutUsPageComponent {
    constructor(private backgroundService: BackgroundService) { }

    ngOnInit() {
        this.backgroundService.setBackgroundColor('#F2F5F9');
    }
}
