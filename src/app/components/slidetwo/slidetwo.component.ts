import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { animateScroll } from 'src/app/core/tools/animate-scroll';

@Component({
  selector: 'app-slidetwo',
  templateUrl: './slidetwo.component.html',
  styleUrls: ['./slidetwo.component.css'],
})
export class SlidetwoComponent implements OnInit {
  slidesData = [
    {
      src: 'assets/marca-acevic.png',
      background: '#fff',
      width: '212px',
      height: '35px',
    },
    {
      src: 'assets/marca-casa-empreendedor.png',
      background: '#D809EA',
      width: '241px',
      height: '138px',
    },
    {
      src: 'assets/marca-biscoito-conquista.png',
      background: '#F29D20',
      width: '210px',
      height: '113px',
    },
    {
      src: 'assets/marca-prancheta.png',
      background: '#fff',
      width: '204px',
      height: '138px',
    },
    {
      src: 'assets/marca-casa-empreendedor.png',
      background: '#D809EA',
      width: '241px',
      height: '138px',
    },
  ];
  currentIndex = 0;

  @ViewChild('imagesContainer') imagesContainer!: ElementRef;

  constructor() {}

  prevSlide(): void {
    animateScroll(this.imagesContainer, -200);
  }

  nextSlide() {
    animateScroll(this.imagesContainer, 200);
  }

  ngOnInit(): void {}
}
