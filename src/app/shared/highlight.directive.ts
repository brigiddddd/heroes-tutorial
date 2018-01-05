import { Directive, ElementRef } from '@angular/core';
import { MessageService } from '../messages/message.service';

@Directive({ selector: '[appHighlight], input' })
// Highlight the host element or any InputElement in gray
export class HighlightDirective {
  constructor(el: ElementRef, private messageService: MessageService) {
    el.nativeElement.style.backgroundColor = 'lightgray';
    this.log(`* Shared highlight called for ${el.nativeElement.tagName}`);
  }

  log(msg: string) {
    this.messageService.add('HighlightDirective ' + msg);
  }
}
