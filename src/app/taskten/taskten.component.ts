import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskten',
  templateUrl: './taskten.component.html',
  styleUrls: ['./taskten.component.css']
})
export class TasktenComponent implements OnInit {
  isShow=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDisplay()
  {
    this.isShow=!this.isShow;
  }
}
