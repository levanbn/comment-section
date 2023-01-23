import { Component, Input } from '@angular/core';
import json from '../../assets/data/data.json';
@Component({
  selector: 'app-write-section',
  templateUrl: './write-section.component.html',
  styleUrls: ['./write-section.component.scss']
})
export class WriteSectionComponent {
  @Input() data:any;
  commentContent:string="";
}
