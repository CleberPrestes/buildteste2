import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kg',
})
export class KgPipe implements PipeTransform {
  public transform(kg: number): string {
    if (!kg === null) {
      return '0';
    }
    let kgformat: string;
    kgformat = kg + ' Kg'
    return kgformat;
  }
}
