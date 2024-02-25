import { ElementRef } from '@angular/core';

export function animateScroll(element: ElementRef, offset: number) {
  const start = element.nativeElement.scrollLeft;
  const duration = 200;

  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    element.nativeElement.scrollLeft = start + progress * offset;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}
