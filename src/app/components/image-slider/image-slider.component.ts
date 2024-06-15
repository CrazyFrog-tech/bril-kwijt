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


  constructor() {
  }

  

  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? --this.currentIndex : this.images.length - 1;
  }
}
