import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  fotos = [
    { src: 'assets/template-dentista.png', alt: '', name: 'Dentistas' },
    { src: 'assets/template-advogado.png', alt: '', name: 'Advogados' },
    { src: 'assets/template-advogado.png', alt: '', name: 'Advogados' },
    { src: 'assets/template-medico.png', alt: '', name: 'Clínicas Médicas' },
  ];
  isExpanded: number | null = null;

  toggleExpanded(index: number) {
    if (this.isExpanded === index) {
      this.isExpanded = null;
    } else {
      this.isExpanded = index;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
