import { Component } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gym-workout-list-app';

  isHideLogin = true;


  onButtonClick(){

    this.isHideLogin = false;

  }

  onButtonClickAgain() {
    this.isHideLogin = true;

  }


}
