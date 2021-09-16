import { Directive, ElementRef, OnInit,  } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {} /* constructor injection of ElementRef also note the use of private to use it */

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
