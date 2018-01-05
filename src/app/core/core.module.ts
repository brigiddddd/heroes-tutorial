import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, UserServiceConfig } from './user.service';
import { TitleComponent } from './title.component';
import { MessagesComponent } from '../messages/messages.component';
import { MessageService } from './../messages/message.service';

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent, MessagesComponent],
  exports: [TitleComponent, MessagesComponent],
  providers: [UserService, MessageService]
  // TODO: MESSAGING!
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: UserServiceConfig, useValue: config }]
    };
  }
}
