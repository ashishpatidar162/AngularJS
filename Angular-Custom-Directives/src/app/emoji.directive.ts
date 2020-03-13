import { Directive, ElementRef, OnInit, Input } from '@angular/core';
 
@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective implements OnInit{

  @Input("appEmoji") emoji:string;

  constructor(private el:ElementRef) { }

  //It is invoked only once when the directive is instantiated.

  ngOnInit(){

    this.el.nativeElement.textContent=this.el.nativeElement.textContent + '*'; 
    // this.el.nativeElement.style.color = 'blue';

  }

}
