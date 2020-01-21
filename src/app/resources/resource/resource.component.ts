import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  @Input() resource;
    
  constructor() { }

  ngOnInit() {
  }
}
