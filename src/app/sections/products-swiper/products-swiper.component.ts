import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'products-swiper',
  templateUrl: './products-swiper.component.html',
  styleUrls: ['./products-swiper.component.scss']
})
export class ProductsSwiperComponent {
  mySwiper: Swiper | undefined;

  constructor() { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('#productsSwiper', {
      slidesPerView: 4,
      spaceBetween: 19,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
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
