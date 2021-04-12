import { Pipe, PipeTransform } from '@angular/core';
import {Directive, HostListener, ElementRef} from '@angular/core';
@Pipe({
  name: 'directive'
})
export class DirectivePipe implements PipeTransform {

  transform(value: string): unknown {
    var result = "";
    result = value.toLocaleUpperCase();
    return result
  }

}
