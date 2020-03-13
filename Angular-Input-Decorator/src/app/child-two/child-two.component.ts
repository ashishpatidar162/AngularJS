import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //  <!-- use alias 'msg' -->
  @Input('msg') message:string;
}
