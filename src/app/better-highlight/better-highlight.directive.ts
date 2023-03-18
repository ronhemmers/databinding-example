import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  /**
   * Here we will use the Angular Renderer2 class to change the style
   * of an HTML element... this is the better approach for any DOM
   * manipulations.
   * 
   * We need access to the element and we will use a Renderer2 as well.
   * And use the methods the renderer provides to access the DOM.
   * 
   * @param elementRef 
   * @param renderer 
   */
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  /**
   * Do your initialization in here instead of the constructor.
   */
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'Khaki');
  }

}
