import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resStr: string = '';    
  classStr: boolean ;
  getRand(){
    let alphabet1 = '1234567890abcdifgjiklmnopqrstuywxvz',
    word = '';
    for(let i = 0; i < 5; i++){
      word += alphabet1[Math.round(Math.random() * (alphabet1.length - 1))
      ]};
    this.resStr = word;
    const str = word.split('');
    this.classStr = str.some(Number);
    
     
    console.log(this.classStr);
    
  };
  intervalRand =  interval(3000);
  subscribe = this.intervalRand.subscribe( any => this.getRand());
}


