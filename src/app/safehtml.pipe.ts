import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe {
  constructor(private sanitizer:DomSanitizer){}
  
  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }

}