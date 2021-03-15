import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  template: `./counter.component.html`
})
export class CounterComponent implements OnInit {

  countTo = 100;
  speed = 0;
  duration = 5000;

  constructor() {}

  ngOnInit(): void {}
}
// TODO: Directive
/*
import { Directive, OnChanges, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[CountTo]'
})
export class CountToDirective implements OnChanges, OnInit {
  @Input()
  CountTo: number;
  @Input()
  from = 0;
  @Input()
  duration = 4;

  e = this.el.nativeElement;
  num: number;
  refreshInterval = 30;
  steps: number;
  step = 0;
  increment: number;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.CountTo) {
      this.start();
    }
  }

  calculate() {
    this.duration = this.duration * 1000;

    this.steps = Math.ceil(this.duration / this.refreshInterval);
    this.increment = ((this.CountTo - this.from) / this.steps);
    this.num = this.from;
  }

  tick() {
    setTimeout(() => {
      this.num += this.increment;
      this.step++;
      if (this.step >= this.steps) {
        this.num = this.CountTo;
        this.e.textContent = this.CountTo;
      } else {
        this.e.textContent = Math.round(this.num);
        this.tick();
      }
    }, this.refreshInterval);
  }

  start() {
    this.calculate();
    this.tick();
  }
}*/
