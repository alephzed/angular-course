import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent'; // allow the colors to be set from outside the directive
  @Input('appBetterHighlight') highlightColor = 'blue'; // set an alias for the directive to the directive name

  // on the element this element sits, access the style property and then the sub-property
  // and then set the property to whatever it is changed to
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { } /* better than using ElementRef */

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // sometimes apps don't run in the browser so this is a better approach than directly using the dom
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
  }

  @HostListener('mouseenter') mouseover(eventData: Event) { /* listen to 'mouseenter' event on the element that has the directive */
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor);
    this.backgroundColor = this.highlightColor; // alternative is to use @HostBinding
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { /* listen to 'mouseleave' event on the element that has the directive */
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
    this.backgroundColor = this.defaultColor; // alternative to using renderer in above line
  }

}
