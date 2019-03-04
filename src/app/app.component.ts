import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Demo';
  vara = 1;
  varb = 3;
  link ="https://www.google.it";

  getVal(): any {
    return this.vara + this.varb;
  }
}
