import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appGoto]',
})
export class GotoDirective {
  constructor(private _el: ElementRef) { }
  @HostListener('click')
  onClick() {
    let v = this._el.nativeElement.value;
    let p = v.indexOf('_');
    this._el.nativeElement.selectionStart = p;
    this._el.nativeElement.selectionEnd = p;
  }
}
