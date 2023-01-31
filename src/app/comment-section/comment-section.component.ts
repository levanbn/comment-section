import { Component, Input, OnInit } from '@angular/core';
import { isDeleteExpression } from 'typescript';
import json from '../../assets/data/data.json';
@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  @Input() data: any;
  @Input() comment: any;
  @Input() index: number = -1;
  @Input() currentuser: any;
  showReplyInput: boolean = false;
  newReply: object = {};
  replyContent: string = '';
  askDelete: boolean = false;

  // ganaxleba
  ngOnInit() {
    let LST = localStorage.getItem('data');
    if (LST) {
      this.data = JSON.parse(LST);
    } else {
      this.data = json;
    }
  }
  showReplyButton() {
    this.showReplyInput = !this.showReplyInput;
    this.replyContent = `${this.data.comments[this.index].user.username} `
  }
  addReply() {
    this.newReply = {
      id: this.data.comments[this.index].replies.length + 1 + this.index,
      content: this.replyContent,
      createdAt: '1 second ago',
      score: 0,
      user: this.data.currentUser,
      replies: [],
    };
    this.data.comments[this.index].replies.push(this.newReply);
    this.replyContent = '';
    this.newReply = {};
    this.showReplyButton();
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  deleteComment() {
    this.askDelete = !this.askDelete;
  }
  deleteYes() {
    this.data.comments.splice(this.index, 1);
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  deleteNo() {
    this.askDelete = !this.askDelete;
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  upVote() {
    this.comment.score++;
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  downVote() {
    this.comment.score--;
    localStorage.setItem('data', JSON.stringify(this.data));
  }


}

