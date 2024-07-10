import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: 'important'

})

export class ImportantPipe implements PipeTransform {

  transform(value: any): any {
    return `${value}!`;
  }

}