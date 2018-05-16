import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultMultiple'
})
export class DefaultMultiplePipe implements PipeTransform {
  // multiple parameter pipe
  transform(value: string, fallback: string, forceHttps: boolean = false): string {
    let image = '';
    if (value) {
      image = value;
    } else {
      image = fallback;
    }

    if (forceHttps) {
      // force use of https instead of http url of image
      if (image.indexOf('https') === -1) {
        image = image.replace('http', 'https');
      }
    }
    return image;
    // <img [src]="imageUrl | default:'http://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg':true"/>
    //              value             fallback                                                         forceHttps
  }

}
