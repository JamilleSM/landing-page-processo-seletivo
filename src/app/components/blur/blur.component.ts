import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blur',
  templateUrl: './blur.component.html',
  styleUrls: ['./blur.component.css']
})
export class BlurComponent implements OnInit {
  @Input() color: "blue" | "pink" = "pink";

  constructor() { }

  ngOnInit(): void {
  }

}
