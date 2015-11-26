import { Component, View, ElementRef } from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  templateUrl: './app.html'
})
export class App {   
  constructor(elementRef : ElementRef) { }  
}