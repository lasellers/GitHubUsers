import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  private units = [
    'bytes',
    'KB',
    'MB',
    'GB',
    'TB'
  ];

  transform(bytes: number = 0, precision: number = 0): string {
    if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
      return 'Not a number';
    }

    let unitIndex = 0;

    while (bytes >= 1024 && unitIndex + 1 < this.units.length) {
      bytes /= 1024;
      unitIndex++;
    }

    return bytes.toFixed(+precision) + ' ' + this.units[unitIndex];
  }

}
