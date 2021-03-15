import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CounterModule],
  exports: [CounterModule]
})
export class ComponentsModule {}
