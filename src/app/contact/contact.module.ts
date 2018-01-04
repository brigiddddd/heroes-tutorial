import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { ContactHighlightDirective } from './contact-highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomePipe } from './awesome.pipe';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AwesomePipe, ContactComponent, ContactHighlightDirective],
  exports: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule {}
