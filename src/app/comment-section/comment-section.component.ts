import { Component, Input, OnInit } from '@angular/core';
import json from '../../assets/data/data.json';
@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  @Input() index: number = -1;
  @Input() data:any;
  mainUser:string="juliusomo";

  // ganaxleba
  ngOnInit() {
    let LST = localStorage.getItem('data');
    if (LST) {
      this.data = JSON.parse(LST);
    } else {
      this.data = json;
    }
  }



}

