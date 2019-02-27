import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  appTitle = 'PerDindiRindina';
  toolTip = 'come volete voi';
  inputVar: string;

  changeTitle(){
    this.appTitle='ho cambiato il titolo di nuovo';
    this.inputVar='sempre quello che volete voi parte 2';
  }
  showAlert(){
    const sampleService: SampleService = new SampleService();
    sampleService.showAlert(this.inputVar);
  }

}
