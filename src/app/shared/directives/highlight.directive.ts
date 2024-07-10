import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  public onMouseOver() {
    this.el.nativeElement.style.backgroundColor = '#e1bee7';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout')
  public onMouseOut() {
    this.el.nativeElement.style.backgroundColor = 'white';
    this.el.nativeElement.style.cursor = 'default';
  }
}
