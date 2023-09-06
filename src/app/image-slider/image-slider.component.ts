import { Component, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input() images: SafeUrl[] = [];
  currentIndex = 0;
  slides = [
    { image: 'assets/img00.jpg', description: 'Image 00' },
    { image: 'assets/img01.jpg', description: 'Image 01' },
    { image: 'assets/img02.jpg', description: 'Image 02' },
    { image: 'assets/img03.jpg', description: 'Image 03' },
    { image: 'assets/img04.jpg', description: 'Image 04' },
  ];

  constructor() {
    this.preloadImages();
  }

  preloadImages() {
    this.slides.forEach((slide) => {
      new Image().src = slide.image;
    });
    console.log('slides: ', this.slides);
  }

  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? --this.currentIndex : this.slides.length - 1;
  }
}
