import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  photos = [
    { src: 'assets/template-dentista.png', alt: '', name: 'Dentistas' },
    { src: 'assets/template-advogado.png', alt: '', name: 'Advogados' },
    { src: 'assets/template-advogado.png', alt: '', name: 'Advogados' },
    { src: 'assets/template-medico.png', alt: '', name: 'Medicos' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
