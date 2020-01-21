import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  @Input() discussion;

  constructor() { }

  ngOnInit() {
  }

}
