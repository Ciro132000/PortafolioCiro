import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, numberProject: number = 0): any {
    
    return value.slice(0,numberProject+3);
  }

}
