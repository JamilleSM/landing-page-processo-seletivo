import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  videos = [
    { videoId: '8vkGADckmiI' },
    { videoId: '8vkGADckmiI' },
    { videoId: '8vkGADckmiI' },
    { videoId: '8vkGADckmiI' },
    { videoId: '8vkGADckmiI' },
    { videoId: '8vkGADckmiI' },
  ];

  currentIndex = 0;

  @ViewChild('video') video!: ElementRef;

  constructor() {}

  prevSlide(): void {
    this.video.nativeElement.scrollLeft -= 100;
  }

  nextSlide() {
    this.video.nativeElement.scrollLeft += 100;
  }

  ngOnInit(): void {}
}
