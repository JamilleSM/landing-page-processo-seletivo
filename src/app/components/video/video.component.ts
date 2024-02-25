import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { animateScroll } from 'src/app/core/tools/animate-scroll';

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

  prevVideo(): void {
    animateScroll(this.video, -200);
  }

  nextVideo() {
    animateScroll(this.video, 200);
  }

  ngOnInit(): void {}
}
