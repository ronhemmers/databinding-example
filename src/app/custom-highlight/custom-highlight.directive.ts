import { Directive, HostListener, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'MistyRose';  // example of using an alias
  // @Input('appCustomHighlight') highlightColor: string = 'MistyRose';  // example of using an alias

  @HostBinding('style.backgroundColor') backgroundColor: string; // initializing here will not get recognized

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
