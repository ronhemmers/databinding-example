import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Get the element this directive sits on and change the background color...
    // but this is not good practice.
    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }

}