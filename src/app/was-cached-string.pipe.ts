import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wasCachedString'
})
export class WasCachedStringPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Was previously Cached' : 'Was NOT previously Cached';
    // return value ? '<span class="text-info">Was Cached<span>' : '<span class="text-warning">Was NOT Cached</span>';
  }

}
