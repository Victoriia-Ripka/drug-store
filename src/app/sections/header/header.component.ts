import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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

  navigateToContacs() {
    this.scrollService.scrollToSection('contactus');
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
