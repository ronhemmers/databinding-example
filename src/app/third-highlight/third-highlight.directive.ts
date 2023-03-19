import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appThirdHighlight]'
})
export class ThirdHighlightDirective implements OnInit {
  
  // New decorator.. where we don't need the renderer.
  // Need to bind it to a property of the element (argument to HostBinding(.)),
  // and we're using camelCase since we're accessing DOM properties.
  // Give this element background an initial transparent background color.
  // You can bind to any property of the element it's sitting on.
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'Khaki');
    this.backgroundColor = 'Coral';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
  
}
