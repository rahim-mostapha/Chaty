import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RequestService } from '../request.service';
import { RoomsService } from '../rooms.service';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MessageService } from '../message.service';

declare var MediaRecorder: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  messageContainer : any;
  roomInfo : Object;
  requestInfo : Object;
  userInfo : Object= JSON.parse(localStorage.getItem('userInfo'));
  friendId : String;
  messages : Object [];
  emojiView : Boolean = false;
  userTyping : Object [] = [];
  messageContent : String = '' ;
  messageType : String = 'text';
  fileViewer : any;
  fileContainer : any;
  fileExtension : any;
  voiceMedia : any = null;
  voiceChank = [];

  constructor(private request : RequestService , private room : RoomsService , private user : UserService ,
              private route : ActivatedRoute , private flashMessage : FlashMessagesService , 
              private message : MessageService , private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.friendId = params.get('_id');
    });
    this.getRoomInfo();
  }

  // message sending 
  sendMessage(){
    let data = {message : this.messageContent , sender : this.userInfo['_id'] , room : this.roomInfo['name']};
    if(this.messageType !== 'text'){
      if(this.messageType === 'audio'){
        this.fileExtension = 'wav';
      }
      data['extension'] = this.fileExtension;
      data['message'] = this.fileContainer;
      data['type'] = this.messageType;
    }
    this.message.sendMessage(data);
    this.messageContent = '';
    this.messageType = 'text';
  }

  // user typing
  onType(){
    this.message.typing({_id : this.userInfo['_id'] , room : this.roomInfo['name']});
  }
  endType(){
    this.message.endTyping({_id : this.userInfo['_id'] , room : this.roomInfo['name']});
  }

  // message delete
  deleteMessag(_id){
    this.message.removeMessage({ _id , room : this.roomInfo['name']});
  }

  messageRecivedFuns(){
    this.message.onNewMessage().subscribe(
      msg => {
        this.messages.push(msg);
        this.scrollToEnd();
      }
    );
    this.message.onTyping().subscribe(
      msg => {
        msg = this.roomInfo['users'].filter(user => user['_id'] === msg)[0];
        this.userTyping.push(msg);
        this.scrollToEnd();
      }
    );
    this.message.onTypingEnd().subscribe(
      msg => {
        this.userTyping = this.userTyping.filter(typer => typer['_id'] !== msg);
      }
    );
    this.message.noRemoveMessage().subscribe(
      msg => {
        if(msg['status']){
          this.messages.forEach((mess , i) =>{
            if(mess['_id'] === msg['_id']){
              mess['deleted'] = true;
              this.messages[i] = mess;
            }
          });
        }
      }
    );
  }

  // emoji setting
  emojiToggle(){
    this.emojiView = !this.emojiView;
  }
  addEmoji(event) {
    this.messageContent += event.emoji.native;
  }

  setMessageView(ele){
    this.messageContainer = ele;
    return '';
  }

  scrollToEnd(){
    setTimeout(() => {
      this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    } , 80);
  }

  fileUploader(event , fileType) {
    let image = event['target'].files[0];
    this.fileHandle(image , fileType);
  }

  fileHandle(file , fileType){
    const reader = new FileReader();
    this.messageType = fileType;
    reader.onload = () => {
      this.fileContainer = reader.result as string;
      if(this.fileExtension !== 'wav'){
        this.fileExtension = file['name'].split(/\./g);
        this.fileExtension = this.fileExtension[this.fileExtension['length']-1];
      }
    }
    reader.readAsArrayBuffer(file);
    if(this.messageType !== 'file' || this.messageType !== 'text'){
      this.renderFile(file);
    }
  }

  renderFile(file){
    if(this.messageType === 'file'){
      this.fileViewer = file['name'];
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        this.fileViewer = reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }

  // voice recorder
  startRecord(){
    this.messageType = 'audio';
    navigator.mediaDevices.getUserMedia({audio : true}).then( stream => {
      this.voiceMedia = new MediaRecorder(stream);
      this.voiceMedia.start();
      this.voiceChank = [];
      this.voiceMedia.ondataavailable =  (e) => {
        this.voiceChank.push(e.data);
      };
      this.voiceMedia.onstop = () => {
        let blob = new Blob(this.voiceChank , {type: "audio/wav"});
        this.voiceChank = [];
        this.fileExtension = 'wav';
        this.fileHandle(blob , 'audio');
      };
    });
  }

  sanitize(url){
    let blob = this.sanitizer.bypassSecurityTrustUrl(url);
    return blob['changingThisBreaksApplicationSecurity'] != undefined ? blob : '' ;
  }

  stopRecorder(){
    this.voiceMedia.stop();
  }

  resetMessage(){
    if(this.messageType === 'audio'){
      this.voiceMedia.stop();
      this.voiceMedia = null;
      this.voiceChank = [];
    }
    this.messageType = 'text';
  }

  //request and room setting
  getRoomInfo() {
    this.room.haveRoom(this.friendId).subscribe(
      roomRes => {
        if(roomRes['status'] === 'done'){
          let data = roomRes['data'];
          if(data){
            // they have chat room
            this.roomInfo = data;
            // join to chat room
            this.message.joinRoom(this.roomInfo['name']);
            // pre-process for user data 
            this.roomInfo['users'] = this.roomInfo['users'].filter(user => user['_id'] !== this.userInfo['_id']);
            // get all messages 
            this.getAllmessages();
            // set message recived 
            this.messageRecivedFuns();
          } else {
            this.getRequestInfo();
          }
        } else {
          this.flashMessage.show(`${roomRes['status']} : ${roomRes['error']}` , {cssClass : 'alert-danger'});
        }
      },
      error => {
        this.flashMessage.show(error.message , {cssClass : 'alert-danger'});
      }
    );
  }

  getAllmessages(){
    this.message.getAllMessage(this.roomInfo['name']).subscribe(
      res => {
        if(res['status'] === 'done') {
          this.messages = res['data'];
        }
      }
    );
  }

  getRequestInfo() {
    // check if they have chat friendship request or not
    this.request.haveRequest(this.friendId).subscribe(
      res => {
        if(res['status'] === 'done'){
          this.requestInfo = res['data'];
          if(this.requestInfo['to']._id === this.userInfo['_id'] && this.requestInfo['status'] === 0) this.requestInfo =null;
        } else {
          this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
        }
      } ,
      err => {
        this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
      }
    );
  };
    
  sendRequest(){
    if(!this.requestInfo || this.requestInfo['status'] === 0){
      this.request.makeNewRequest(this.friendId).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`${res['status']}` , {cssClass : 'alert-success text-center'});
            this.getRequestInfo();        
          } else {
            this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
          }
        } , 
        err => {
          this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
        }
      );
    }
  }
  deleteRequest(){
    if(this.requestInfo){
      this.request.deleteRequest(this.requestInfo['_id']).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`request deleted` , {cssClass : 'alert-success text-center'});
            this.getRequestInfo();        
          } else {
            this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
          }
        } , 
        err => {
          this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
        }
      );
    }
  }
  rejectRequest(){
    if(this.requestInfo){
      this.request.rejectRequest({ _id : this.requestInfo['_id']}).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`request rejected` , {cssClass : 'alert-success text-center'});
            this.requestInfo = null;        
          } else {
            this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
          }
        } , 
        err => {
          this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
        }
      );
    }
  }
  acceptRequest(){
    if(this.requestInfo){
      this.request.acceptRequest({ _id : this.requestInfo['_id'] , friend : this.requestInfo['from']._id}).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`request accepted` , {cssClass : 'alert-success text-center'});
            this.getRoomInfo();
          } else {
            this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
          }
        } , 
        err => {
          this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
        }
      );
    }
  }

  showRequest(){
    // console.log(this.userTyping);
    console.log(this.messages);
    // console.log(this.roomInfo);
    // console.log(this.requestInfo);
    // console.log(this.userInfo);
  }
}
