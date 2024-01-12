import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ScrollService } from '@services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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

  navigateToBestsellers() {
    this.router.navigate([''], { fragment: 'bestsellers' });
  }

  navigateToTestimonials() {
    this.router.navigate([''], { fragment: 'testimonials' });
  }

  private handleNavigationEnd(url: string, fragment: string | null) {
    if (fragment === 'testimonials') {
      this.scrollService.scrollToSection('testimonials', -250);
    }
    if (fragment) {
      this.scrollService.scrollToSection(fragment);
    }
  }
}
