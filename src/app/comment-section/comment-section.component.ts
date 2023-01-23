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
    let LSD = localStorage.getItem('data');
    if (LSD) {
      this.data = JSON.parse(LSD);
    } else {
      this.data = json;
    }
  }
  

}

