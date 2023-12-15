import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) { }
  
  navigateToTestimonials() {
    this.scrollService.scrollToSection('testimonials')
  }
}
