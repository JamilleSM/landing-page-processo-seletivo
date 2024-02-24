import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  slidesData = [
    {
      src: 'assets/marca-guajeru.png',
      background: '#fff',
      width: '215px',
      height: '112px',
    },
    {
      src: 'assets/marca-barra.png',
      background: '#429B20',
      width: '218px',
      height: '85px',
    },
    {
      src: 'assets/marca-malhada-pedra.png',
      background: '#30328A',
      width: '231px',
      height: '76px',
    },
    {
      src: 'assets/marca-brumado.png',
      background: '#fff',
      width: '224px',
      height: '48px',
    },
    {
      src: 'assets/marca-barra.png',
      background: '#429B20',
      width: '218px',
      height: '85px',
    },
  ];
  currentIndex = 0;

  @ViewChild('imagesContainer') imagesContainer!: ElementRef;

  constructor() {}

  prevSlide(): void {
    this.imagesContainer.nativeElement.scrollLeft -= 100;
  }

  nextSlide() {
    this.imagesContainer.nativeElement.scrollLeft += 100;
  }

  ngOnInit(): void {}
}
