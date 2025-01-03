import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipleargs'
})
export class MultipleargsPipe implements PipeTransform {

  transform(value: string, prefix: string, suffix: string): string {
    if (!value) return '';
    return `${prefix} ${value} ${suffix}`;
  }

}
