import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]'
})
export class RoundBlockDirective implements OnInit{
 
  @Input() appRoundBlock:string;
  // custom rendering to intercept rendering calls
  // or to render to something other than DOM.


  constructor(private renderer:Renderer2,private elmRef:ElementRef) {
    // renderer.setStyle(elmRef.nativeElement,'border-radius','100px');
   }

//It is invoked only once when the directive is instantiated.
   ngOnInit() {
    let roundValue= `${this.appRoundBlock}`;
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius',roundValue);
    this.renderer.setStyle(this.elmRef.nativeElement, 'border','solid red');
    // this.renderer.removeStyle(this.elmRef.nativeElement, 'border');
    

  }

  

}
