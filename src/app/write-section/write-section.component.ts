import { Component, Input } from '@angular/core';
import json from '../../assets/data/data.json';
@Component({
  selector: 'app-write-section',
  templateUrl: './write-section.component.html',
  styleUrls: ['./write-section.component.scss']
})
export class WriteSectionComponent {
  @Input() data: any;
  commentContent: string = '';
  newComment: object = {};
  addComment() {
    this.newComment = {
      id: this.data.comments.length,
      content: this.data.commentContent,
      createdAt: '1 second ago',
      score: 0,
      user: this.data.currentUser,
      replies: [],
    };
    this.data.comments.push(this.newComment);
    this.commentContent = '';
    this.newComment = {};
    localStorage.setItem('data', JSON.stringify(this.data));
  }
}

interface Newcomment {
  ig: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies?: Array<Newcomment>;
}
