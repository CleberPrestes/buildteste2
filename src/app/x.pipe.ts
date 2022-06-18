import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'x',
})
export class xPipe implements PipeTransform {
  public transform(series: number): string {
    if (!series === null) {
      return '0';
    }
    let xformat: string;
    xformat = series + ' X'
    return xformat;
  }
}
