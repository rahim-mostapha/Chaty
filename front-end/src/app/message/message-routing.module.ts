import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMessageComponent } from './new-message/new-message.component';
import { RequestComponent } from './request/request.component';
import { FriendComponent } from './friend/friend.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path : 'new' , component : NewMessageComponent},
  { path : 'request' , component : RequestComponent},
  { path : 'friends' , component : FriendComponent},
  { path : 'chat/:_id' , component : ChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
