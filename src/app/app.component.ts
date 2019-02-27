import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'PerDindiRindina';
  toolTip = 'come volete voi';
  inputVar: string;

  changeTitle(){
    this.appTitle='ho cambiato il titolo di nuovo';
    this.inputVar='sempre quello che volete voi parte 2';
  }
  showAlert(){
    alert(this.inputVar);
  }
}
