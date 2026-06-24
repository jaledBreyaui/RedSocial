import {
  AfterViewChecked,
  Directive,
  ElementRef,
  Input,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class AutofocusDirective implements AfterViewChecked {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private focused = false;

  @Input() appAutofocus = true;

  ngAfterViewChecked(): void {
    if (!this.appAutofocus || this.focused) return;

    this.focused = true;
    queueMicrotask(() => this.elementRef.nativeElement.focus());
  }
}
