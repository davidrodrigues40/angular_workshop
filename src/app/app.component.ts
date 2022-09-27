import { Component, OnInit, VERSION } from '@angular/core';
import { hero } from './model/hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  hero = new hero();

  ngOnInit(): void {
    this.hero.realName = 'Clark J Kent';
    this.hero.heroName = 'Superman';
  }
}
