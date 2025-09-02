import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapitalCreate]'
})
export class CapitalCreateDirective {
  // Create Custom Directive ( After this Step 
  // Open create-idcard ( and apply appCapitalCreate in input field ))

  constructor(public _elementRef:ElementRef) { }
  @HostListener('keyup')
  change(){
    this._elementRef.nativeElement.value=this._elementRef.nativeElement.value.toUpperCase();
  }
}
