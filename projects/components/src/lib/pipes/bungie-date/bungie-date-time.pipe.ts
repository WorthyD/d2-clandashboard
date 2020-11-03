
import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bungieDateTime'
})
export class BungieDateTimePipe extends DatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) locale: string) {
    super(locale);
  }

  transform(date: Date): string {
    return super.transform(date, 'yyyy-MM-dd h:mm a');
  }
}
