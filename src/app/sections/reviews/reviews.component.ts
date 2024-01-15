import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  mySwiper: Swiper | undefined;
  slidesQuantity: number = 5
  currentPage: number = 1;

  constructor(private router: Router, private el: ElementRef) { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('#reviewsSwiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      // direction: 'vertical',
      enabled: false,
      loop: true,
      pagination: {
        el: '.custom-pagination',
        renderCustom: (_, current, total) => {
          return current + ' of ' + total;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        480: {
          enabled: true,
          // direction: 'horizontal',
        }
      }
    });
  }

  ngOnChanges() {
    if (this.slidesQuantity) {
      this.slidesQuantity = Math.max(1, this.slidesQuantity)
    }
  }

  goToPage(page: number): void {
    if (this.mySwiper) {
      this.mySwiper.slideTo(page - 1)
    }
  }

  nextSlide() {
    if (this.mySwiper) {
      this.mySwiper.slideNext();
      if (this.currentPage == this.slidesQuantity) {
        this.currentPage = 1
      } else {
        this.currentPage += 1
      }
    }
  }

  prevSlide() {
    if(this.mySwiper) {
      this.mySwiper.slidePrev();
      if (this.currentPage == 1) {
        this.currentPage = this.slidesQuantity
      } else {
        this.currentPage -= 1
      }
    }
  }

}
