import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() message:string;

}
