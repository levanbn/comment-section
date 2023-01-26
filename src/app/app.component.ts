import { Component } from '@angular/core';
import json from '../assets/data/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comment-section';
  data:any = json;
  constructor() {
    this.checkData()
  }
  checkData() {
    let LST = localStorage.getItem('data');
    if (LST) {
      this.data = JSON.parse(LST);
    } else {
      this.data = json;
    }
  }

}


