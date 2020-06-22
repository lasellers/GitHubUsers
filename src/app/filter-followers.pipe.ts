import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFollowers',
  // pure: false
})
export class FilterFollowersPipe implements PipeTransform {

  transform(filters: any, filterString: string, propName: string): any {
    if (filters.length === 0 || filterString === '') {
      return filters;
    }
    const resultArray = [];
    for (const item of filters) {
      if (item[propName].toLowerCase().startsWith(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}