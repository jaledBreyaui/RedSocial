import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appLimitCounter]',
  standalone: true,
})
export class LimitCounterDirective {
  @Input() appLimitCounter = '';
  @Input() appLimitCounterMax = 200;
  @Input() appLimitCounterWarnAt = 0.9;

  @HostBinding('class.limit-close')
  get limitClose(): boolean {
    return (
      this.appLimitCounter.length >=
      this.appLimitCounterMax * this.appLimitCounterWarnAt
    );
  }

  @HostBinding('attr.aria-label')
  get ariaLabel(): string {
    return `${this.appLimitCounter.length} de ${this.appLimitCounterMax} caracteres`;
  }
}
