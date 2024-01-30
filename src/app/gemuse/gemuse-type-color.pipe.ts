import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gemuseTypeColor'
})
export class GemuseTypeColorPipe implements PipeTransform {

  transform(type: string, ...args: unknown[]): unknown {
    return null;
  }

}
//travaille a faire