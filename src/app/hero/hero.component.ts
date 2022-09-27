import { Component, Input } from '@angular/core';
import { hero } from '../model/hero';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() hero: hero;
}
