import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})



export class LessonsComponent implements OnInit {

  lessons: { id: number, title: string, description: string , videoUrl : string , noteUrl: string , quizUrl? : string } [] = [
    { "id": 1,
     "title": "Introduction of C programming", 
     "description" : "C is a general-purpose programming language that is extremely popular, simple and flexible. It is machine-independent, structured programming language which is used extensively in various applications." , 
     "videoUrl":"https://youtu.be/TQx74C27Vu4",
      "noteUrl":"https://drive.google.com/open?id=1250eiGMClZgiaLjgMX7iPY535Z77vAh5"
      
    },
    { "id": 2,
     "title": "Datatypes", 
     "description" : "Each variable in C has an associated data type. Each data type requires different amounts of memory and has some specific operations which can be performed over it. ",
     "videoUrl":"https://www.youtube.com/watch?v=HzNmyCPmJvU",
     "noteUrl":"https://drive.google.com/open?id=1ZRvvk743dvTBfdQo-CMnq62FWqzPYWxv",
     
     },
    { "id": 3, 
    "title": "Operators",
    "description" : "An operator is a symbol that tells the compiler to perform specific mathematical or logical functions.",
    "videoUrl":"https://www.youtube.com/watch?v=OE294nuQ2x4",
     "noteUrl":"https://drive.google.com/open?id=1h8jpQ0_yWgKs1jG0CqXk_QOpgmNRP9O5",
     "quizUrl":"https://www.geeksforgeeks.org/c-language-2-gq/operators-gq/"
   },
    { "id": 4, 
    "title": "Control statement",
    "description" : "Control statements enable us to specify the flow of program control; ie, the order in which the instructions in a program must be executed. They make it possible to make decisions, to perform tasks repeatedly or to jump from one section of code to another.",
    "videoUrl":"https://www.youtube.com/watch?v=544OgTwXj3s",
    "noteUrl":"https://drive.google.com/open?id=1fJvgo54m9gc1Tm7YzxodSJz7tjZAK7tW",
    
  },
    { "id": 5,
     "title": "Loops",
     "description" : "In looping, a program executes the sequence of statements many times until the stated condition becomes false. A loop consists of two parts, a body of a loop and a control statement. The control statement is a combination of some conditions that direct the body of the loop to execute until the specified condition becomes false.",
     "videoUrl":"https://www.youtube.com/watch?v=21l11_9Osd0",
    "noteUrl":"https://drive.google.com/open?id=18qOUVRSFJYyjDsrJFfq1wGAhG5lWCzlZ",
    "quizUrl":"https://www.geeksforgeeks.org/c-language-2-gq/loops-control-structure-gq/" }
  ];
  
  trackElement(index: number, element: any) {
    return element ? element.guid : null
  }

  constructor() { }

  ngOnInit() {

  }

  

}
