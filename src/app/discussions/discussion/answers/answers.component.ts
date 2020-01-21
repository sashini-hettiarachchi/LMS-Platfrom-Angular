import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input() answers;

  constructor() { }

  ngOnInit() {
    console.log(this.answers)
  }

}
