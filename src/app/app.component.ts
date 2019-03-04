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
  oggetto = { value: 'valoreOggetto' };



  metodo(): boolean {
    return 
  }

  get definizioneClassi() {
    return {
      classea: this.vara === 1,
      classeb: this.varb === 1,
      classec: this.vara === this.varb
    }
  };

  mostraVariabile(value) {
    alert(value);
    this.oggetto = undefined;
  }

  getSomma(): any {
    return this.vara + this.varb;
  }
}