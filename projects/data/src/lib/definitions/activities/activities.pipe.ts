import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activities'
})
export class ActivitiesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
