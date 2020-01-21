import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: {
    id: number,
    title: string,
    imgSrc: string, 
    content: string , 
    links : {src:string, topic: string} []} [] = [
      {"id":1,
      "imgSrc":"https://www.lyfemarketing.com/blog/wp-content/uploads/2018/08/social-media-video.jpg",
      "title":"Videos",
      "content":"xyz",
      "links":[
        {"src":"https://www.youtube.com/watch?v=CPjZKsUYSXg&list=PL_c9BZzLwBRKKqOc9TJz1pP0ASrxLMtp2&index=2&t=0s","topic":"Youtube Playlist"},
        {"src":"https://www.youtube.com/watch?v=LoiPkKne_Wg","topic":"Guessing Game"}]
    },
    {"id":2,
      "imgSrc":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1utpm1O1oyS36pXYUjiLKAUIhy64wQ5NFFHr8L8DxDKT0LeV&s",
      "title":"Books",
      "content":"xyz",
      "links":[
      {"src":"http://www-personal.acfr.usyd.edu.au/tbailey/ctext/ctext.pdf","topic":"An Introduction to the C Programming"},
      {"src":"https://karadev.net/uroci/filespdf/files/a%20book%20on%20c.pdf","topic":"Programming in C"}]
    },
    {"id":3,
      "imgSrc":"https://img.resized.co/businesspost/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvaW1lbmdpbmUucHVibGljLnByb2Quc2JwLmluZm9tYWtlci5pbz91dWlkPTIyOWQ2ZjFhLTIxN2ItNWRjZC1hMWMxLTE4MWNlNDE5MDlkNiZ0eXBlPXByZXZpZXcmcT04MCZoZWlnaHQ9MjAwMCZ3aWR0aD0zNTU2LjI1JmZ1bmN0aW9uPWNyb3ByZXNpemUmeD0wLjI4ODc1Jnk9MCZjcm9wX3c9MC43MTEyNDk5OSZjcm9wX2g9MC45OTk5OTk5OVwiLFwid2lkdGhcIjo3NjUsXCJoZWlnaHRcIjo0ODUsXCJkZWZhdWx0XCI6XCJodHRwOlxcXC9cXFwvczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cXFwvc3RvcmFnZS5wdWJsaXNoZXJwbHVzLmllXFxcL21lZGlhLmJ1c2luZXNzcG9zdC5pZVxcXC9zYnAtbm8taW1hZ2UucG5nXCJ9IiwiaGFzaCI6IjI1NThmMzYwNjg1ODhjNWM4MjNmNWQ0MDA0NmEyZTZkMzhjYmM2NjcifQ==/6-on-6-leaders-questions-and-answers.99999999",
      "title":"Activities",
      "content":"xyz",
      "links":[
        {"src":"https://www.tutorialspoint.com/cprogramming/cprogramming_online_quiz.htm","topic":"Online Quiz"},
        {"src":"https://www.w3resource.com/c-programming-exercises/","topic":"Exercises"}]
    }
    
    
    ]

  constructor() { }

  ngOnInit() {
  }

}
