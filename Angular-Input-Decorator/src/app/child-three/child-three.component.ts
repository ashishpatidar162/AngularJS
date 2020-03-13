import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

  constructor() { }

   @Input() message:string;

  ngOnInit(): void {
     this.message=this.message && this.message.toUpperCase();
  }

  private _message: string;

// @Input('msg') // specify Input decorator here
// set setmessage(inputMessage: string) {
//   this._message = inputMessage && inputMessage.toUpperCase(); // uppercase message here
//   console.log(this._message);
// }

// get getmessage(): string {
//   return this._message;
// }

}
