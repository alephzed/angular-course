import { AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
          Component, DoCheck, Input, OnChanges,
          OnInit, SimpleChanges, ViewEncapsulation, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom // controls whether the styles are applied outside of this component
  // ViewEncapsulation.None will allow styles to be applied to all components
  // ViewEncapsulation.Emulated is the default - all styles are confined to this component
})
export class ServerElementComponent implements OnInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') /* This decorator allow binding to this property */
  // srvElement is the alias for this property that is used for the input binding
  element: {type: string, name: string, content: string}; /* This is a way of defining a custom type without creating an concrete class */

  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  @ContentChild('bluePrintEm', {static: true}) em: ElementRef; /* Similar to view child but elements coming from ng-content directive */
  constructor() {
    console.log('constuctor called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of em ' + this.em);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Text content: ' + this.header.nativeElement.textContent); /* value is blank, demonstrating dom is not yet initialized */
    console.log('Text content of em ' + this.em);
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

}
