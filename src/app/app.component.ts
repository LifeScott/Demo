import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo2019';
  vara = 1;
  varb = 3;
  link = 'https://www.google.it';


  getSomma(): any {
    return this.vara + this.varb;
  }
}
