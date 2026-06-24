import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: 'img[appBrokenImage]',
  standalone: true,
})
export class BrokenImageDirective {
  @Output() appBrokenImage = new EventEmitter<void>();

  @HostListener('error')
  onError(): void {
    this.appBrokenImage.emit();
  }
}
