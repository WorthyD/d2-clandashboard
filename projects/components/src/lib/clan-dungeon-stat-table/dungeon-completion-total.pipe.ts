import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dungeonCompletionTotal'
})
export class DungeonCompletionTotalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
