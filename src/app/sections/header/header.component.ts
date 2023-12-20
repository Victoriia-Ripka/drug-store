import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ScrollService } from '../../services/scroll.service';

const categoriesList = [
  'Anti Acidity',
  'Anti Allergic And Asthma',
  'Anti Depressant',
  'Anti Diabetic',
  'Anti Fungus',
  'Anti Herpes',
  'Anti Viral',
  'Antibiotics Blood Pressure',
  'Cholesterol',
  'Erectile Dysfunction',
  'Gastrointestinal',
  'General Health',
  'Hair Loss Healthy Bones',
  'Heart Disease',
  'Herbal Men\'s Health',
  'Other',
  'Pain Relief',
  'Skin Care',
  'Sleep Aid',
  'Stop Smoking',
  'Weight Loss',
  'Women\'s Health'
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categories = categoriesList
  private destroy$ = new Subject<void>();

  constructor(private router: Router, private scrollService: ScrollService) {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlTree = this.router.parseUrl(event.url);
        const fragment = urlTree.fragment || '';
        this.handleNavigationEnd(event.url, fragment);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateToTestimonials() {
    this.router.navigate([''], { fragment: 'testimonials' });
  }

  private handleNavigationEnd(url: string, fragment: string) {
    // if (fragment === 'testimonials') {
    //   this.scrollService.scrollToSection('testimonials', -750);
    // }
    if (fragment) {
      this.scrollService.scrollToSection(fragment);
    }
  }
}
