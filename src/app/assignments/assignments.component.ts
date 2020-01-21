import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments: 
  { id: number, 
    title: string,
    heading: string,
    collapse: string, 
    description: string ,
    questions?:string [],
    deadline : Date
     } [] = [
      {"id": 1,
      "title" : "Assignment 1",
      "heading": "headingOne",
      "collapse":"collapseOne",
      "description": "Answer the following questions.",
      "questions":[
        "Approximately what is the line #include <stdio.h> at the top of a C source file for?",
        "What are some uses for comments?",
        "Why is indentation important? How carefully does the compiler pay attention to it?",
        "What are the largest and smallest values that can be reliably stored in a variable of type int?",
        "What is the difference between the constants 7, '7'?",
        "What is the function of the semicolon in a C statement?"
     ],
      "deadline": new Date("Feb 08 2020 00:00:00")
     },
       {"id":2,
       "title" : "Assignment 2",
       "heading": "headingTwo",
      "collapse":"collapseTwo",
       "description": "Write a program to print the first 10 Fibonacci numbers. Each Fibonacci number is the sum of the two preceding ones. The sequence starts out 0, 1, 1, 2, 3, 5, 8, ...",
       "deadline": new Date("Mar 08 2020 00:00:00")
      }
      
     ]

  trackElement(index: number, element: any) {
      return element ? element.guid : null
  }
  constructor() { }

  ngOnInit() {
  }

}
