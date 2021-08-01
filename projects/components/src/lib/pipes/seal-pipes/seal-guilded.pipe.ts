import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sealGuilded'
})
export class SealGuildedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
