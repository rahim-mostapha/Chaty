import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PickerModule } from '@ctrl/ngx-emoji-mart'

import { NewMessageComponent } from './new-message/new-message.component';
import { RequestComponent } from './request/request.component';
import { FriendComponent } from './friend/friend.component';
import { ChatComponent } from './chat/chat.component';

import { MessageRoutingModule } from './message-routing.module';

import { RequestService } from './request.service';
import { RoomsService } from './rooms.service';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    NewMessageComponent,
    RequestComponent,
    FriendComponent,
    ChatComponent
  ],
  imports: [
    CommonModule ,
    MessageRoutingModule ,
    FormsModule ,
    HttpClientModule ,
    PickerModule
  ],
  providers: [
    RequestService ,
    RoomsService ,
    MessageService
  ]
})
export class MessageModule { }
