import { Component } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tourist-carousel',
  templateUrl: './tourist-carousel.component.html',
  styleUrls: ['./tourist-carousel.component.scss']
})
export class TouristCarouselComponent {


carouselOptions = {
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa-solid fa-arrow-left icone "></i>', // Left arrow
    '<i class="fa-solid fa-arrow-right icone"></i>', // Right arrow
  ],
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};
  owlCar: any;

goToPreviousSlide() {
  if (this.owlCar) {
    this.owlCar.previous(); // Move to the previous slide
  }
}

goToNextSlide() {
  if (this.owlCar) {
    this.owlCar.next(); // Move to the next slide
  }
}
// Sample Data
trips = [
  {
    image: '../../assets/tripe1.png',
    title: 'الرحلة القادمة',
    description: 'اكتشف الأماكن المذهلة',
    price: 50
  },
  {
    image: '../../assets/tripe2.png',
    title: 'شواطئ هادئة',
    description: 'استمتع بالراحة والاسترخاء',
    price: 70
  },
  {
    image: '../../assets/tripe3.jpg',
    title: 'المعالم السياحية',
    description: 'تجربة سياحية فريدة',
    price: 100
  }
];
}
