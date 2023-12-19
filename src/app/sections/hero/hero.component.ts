import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(private scrollService: ScrollService) { }

  navigateToBestsellers() {
    this.scrollService.scrollToSection('bestsellers', -150);
  }
}
