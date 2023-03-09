import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  //this is a custom directive for changing color
  //copy the selector and put it in the html
  constructor(Ref:ElementRef) 
  {
    Ref.nativeElement.style.color="blue";
  }

}
