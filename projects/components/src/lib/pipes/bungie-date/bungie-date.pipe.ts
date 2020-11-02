import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { formatDate } from 'projects/data/src/lib/utility/format-date';

@Pipe({
  name: 'bungieDate'
})
export class BungieDatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string) {}

  datePipe = new DatePipe(this._locale);

  transform(date: Date): unknown {
    console.log(date);
    return this.datePipe.transform(date, '');
  }
}
