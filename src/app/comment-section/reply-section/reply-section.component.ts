import { Component, Input } from '@angular/core';
import json from '../../../assets/data/data.json';

@Component({
  selector: 'app-reply-section',
  templateUrl: './reply-section.component.html',
  styleUrls: ['./reply-section.component.scss']
})
export class ReplySectionComponent {
  @Input() replies_index: number = -1;
  @Input() comments_index: number = -1;
  @Input()  data:any;
  mainUser:string="juliusomo";

}
