import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wasCached'
})
export class WasCachedPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? 'Was Cached' : 'Was NOT Cached';
    // return value ? '<span class="text-info">Was Cached<span>' : '<span class="text-warning">Was NOT Cached</span>';
  }

}
