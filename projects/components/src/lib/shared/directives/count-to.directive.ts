import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[libCountTo]'
})
export class CountToDirective {
  _libCountTo;
  @Input()
  get libCountTo() {
    return this._libCountTo;
  }
  set libCountTo(value) {
    if (this._libCountTo !== value) {
      this._libCountTo = value;
      this.calculateSteps();
      this.incrementCounter();
    }
  }

  @Input()
  duration = 500;

  displayNumber: number;
  refreshInterval = 30;

  stepCount: number;
  step;

  increment: number;

  constructor(private el: ElementRef) {}

  calculateSteps() {
    this.stepCount = Math.ceil(this.duration / this.refreshInterval);
    this.increment = this.libCountTo / this.stepCount;
    this.displayNumber = 0;
    this.step = 0;
  }

  incrementCounter() {
    setTimeout(() => {
      this.displayNumber += this.increment;
      this.step++;
      if (this.step <= this.stepCount) {
        this.el.nativeElement.textContent = Math.round(this.displayNumber);
        this.incrementCounter();
      } else {
        this.displayNumber = this.libCountTo;
        this.el.nativeElement.textContent = this.libCountTo;
      }
    }, this.refreshInterval);
  }
}
