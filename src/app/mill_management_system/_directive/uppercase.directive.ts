import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[upperCase]'
})
export class UppercaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input')
  onInput() {
    const nativeElement = this.el.nativeElement;
    nativeElement.value = nativeElement.value.toUpperCase();
  }
}
