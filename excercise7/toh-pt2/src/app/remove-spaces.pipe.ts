import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: String): unknown {
  var result = value.replace("-"," ");
   
    return result;
  }

}
