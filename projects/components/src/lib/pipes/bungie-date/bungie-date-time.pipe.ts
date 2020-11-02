import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bungieDateTime'
})
export class BungieDateTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
