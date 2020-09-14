import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playtime'
})
export class PlaytimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return moment().startOf('day').seconds(seconds).format('H:mm');
    return null;
  }

}
