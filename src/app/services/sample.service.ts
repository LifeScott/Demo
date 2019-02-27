import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  showAlert(text: string){
    alert(text);
  }
}
