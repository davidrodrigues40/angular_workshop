import { Component, Input, OnInit } from '@angular/core';
import { hero } from '../model/hero';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @Input() hero: hero;

  constructor() {}

  ngOnInit() {}
}
