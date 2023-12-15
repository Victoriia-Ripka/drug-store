import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private scrollService: ScrollService) { }


  navigateToBestsellers() {
    this.scrollService.scrollToSection('bestsellers')
  }

  navigateToTestimonials() {
    this.scrollService.scrollToSection('testimonials')
  }

  navigateToContacs() {
    this.scrollService.scrollToSection('contactus')
  }
}
