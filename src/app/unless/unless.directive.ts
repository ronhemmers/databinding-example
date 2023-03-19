import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
/**
 * This is a custom structural directive.
 *
 * This acts as the opposite of the ngIf directive.
 * It will be attached if something is False.
 *
 * This will sit on an ng-template
 */
export class UnlessDirective {

  /**
   * This is a setter of a property.
   * We want this to be the opposite of ngIf... so like a ng-not-If
   */
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // false.. we want to display something
      // Creates a view in the view container.
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // true.. display nothing
      // Remove it from the DOM.
      this.viewContainerRef.clear();
    }
  }

  /**
   * The constructor, including creating and setting the member variables of the class.
   * 
   * @param tempalteRef      what
   * @param viewContainerRef where
   */
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

}
