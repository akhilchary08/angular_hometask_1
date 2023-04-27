import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeUsers',
})
export class ActiveUsersPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log(value);
    return value;
  }
}
