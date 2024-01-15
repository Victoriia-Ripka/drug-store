import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'products-swiper',
  templateUrl: './products-swiper.component.html',
  styleUrls: ['./products-swiper.component.scss']
})
export class ProductsSwiperComponent {
  mySwiper: Swiper | undefined;
  slidesQuantity: number = 5
  currentPage: number = 1;

  constructor(private router: Router, private el: ElementRef) { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper(this.el.nativeElement.querySelector('.swiper'), {
      slidesPerView: 4,
      spaceBetween: 19,
      enabled: false,
      loop: true,
      pagination: {
        el: '.custom-pagination',
        renderCustom: (swiper, current, total) => {
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

  goToProductDetail(id: number) {
    this.router.navigate(['/product', id]);
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
    if (this.mySwiper) {
      this.mySwiper.slidePrev();
      if (this.currentPage == 1) {
        this.currentPage = this.slidesQuantity
      } else {
        this.currentPage -= 1
      }
    }
  }

}
