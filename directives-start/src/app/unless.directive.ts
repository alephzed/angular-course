import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // This input property will run a method on receiving the input
  @Input() set appUnless(condition: boolean) { // property name must match the name of the directive
    if (!condition) {
        this.vcRef.createEmbeddedView(this.templateRef); // this is what renders the conditional elements in the dom
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
