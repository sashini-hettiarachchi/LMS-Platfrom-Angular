import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {

  discussions : {
    id: number, 
    title: string, 
    question: string ,
     answers?: string []
    }[] = 
    [{
      "id":1,
      "title":"Can someone explain the concept of pre and post increment in C?",
      "question":"Please explain ++i and i++ use with example. It confuses me many times, which one increment its value first and when assigned?",
      "answers":["The difference between pre-increment (++I) and the post-increment (I++) shows up only when you use the value of the expression. In both of the above statements, the increment of I occurs, but the value of the expression is thrown away, and is not stored or printed or passed anywhere",
      "++i will increment the value of i, and then return the incremented value and i++ will increment the value of i, but return the original value that i held before being incremented.",
      "++i increments the value, then returns it.i++ returns the value, and then increments it.It's a subtle difference.For a for loop, use ++i, as it's slightly faster. i++ will create an extra copy that just gets thrown away."
    ]
  }

  ];

  trackElement(index: number, element: any) {
    return element ? element.guid : null
  }

  constructor() { }

  ngOnInit() {
  }

}
