import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() link: string;
  @Input() alt: string;
  @Input() src: string;

  constructor() {
    this.title = '';
    this.text = '';
    this.link = '';
    this.alt = '';
    this.src = '';
  }

  ngOnInit(): void {}
}
