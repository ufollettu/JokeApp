import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cleanPipe'
})
export class CleanPipePipe implements PipeTransform {
  transform(value: string, badWords: string): string {
    let cleaned: string = "$%#@!";
    let arr: string[] = badWords.split(", ");
    arr.forEach((word) => {
      if (value.includes(word)) {
        value = value.replace(word, cleaned);
      }
    });
    return value;
  }
}
