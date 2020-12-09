import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-taskeight',
  templateUrl: './taskeight.component.html',
  styleUrls: ['./taskeight.component.css']
})
export class TaskeightComponent implements OnInit {
  name: any;

  constructor(private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {this.name=params['name']});
  }

}
