import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NewMessageComponent } from './new-message/new-message.component';
import { RequestComponent } from './request/request.component';
import { FriendComponent } from './friend/friend.component';
import { MessageRoutingModule } from './message-routing.module';
import { ChatComponent } from './chat/chat.component';

import { RequestService } from './request.service';


@NgModule({
  declarations: [
    NewMessageComponent,
    RequestComponent,
    FriendComponent,
    ChatComponent
  ],
  imports: [
    CommonModule ,
    MessageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    RequestService
  ]
})
export class MessageModule { }
