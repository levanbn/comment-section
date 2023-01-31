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
  askDelete: boolean = false;
  deleteReply() {
    this.askDelete = !this.askDelete;
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  deleteYes() {
    this.askDelete = !this.askDelete;
    this.data.comments[this.comments_index].replies.splice(this.replies_index,1);
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  deleteNo() {
    this.askDelete = !this.askDelete;
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  upVoteReply() {
    this.data.comments[this.comments_index].replies[this.replies_index].score++;
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  downVoteReply() {
    if (
      this.data.comments[this.comments_index].replies[this.replies_index]
        .score > 0
    ) {
      this.data.comments[this.comments_index].replies[this.replies_index]
        .score--;
      localStorage.setItem('data', JSON.stringify(this.data));
    }
  }
}


