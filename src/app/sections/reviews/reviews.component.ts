import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  mySwiper: Swiper | undefined;

  constructor() { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('#reviewsSwiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    });
  }

  nextSlide() {
    if (this.mySwiper) {
      this.mySwiper.slideNext();
    }
  }

  prevSlide() {
    if (this.mySwiper) {
      this.mySwiper.slidePrev();
    }
  }

}
