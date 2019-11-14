import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient , HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtService } from '../jwt.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url = 'http://localhost:3000/';
  private socket;   

  constructor(private http : HttpClient , private jwt : JwtService) { 
    this.socket = io(this.url+'chat');
  }

  joinRoom(room : string) {
    this.socket.emit('join' , {room});
  }

  sendMessage(data) {
    // data = {message , sender , room [, type ]}
    this.socket.emit('new-message' , data);
  }

  recivedMessage(data) {
    // data = {messageId , room}
    this.socket.emit('message-recived' , data);
  }

  removeMessage(data) {
    // data = {messageId , room}
    this.socket.emit('remove-message' , data);
  }

  typing(data) {
    // data = {userId , room}
    this.socket.emit('typing' , data);
  }

  endTyping(data) {
    // data = {userId , room}
    this.socket.emit('typing-end' , data);
  }

  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('new-message', msg => {
        // this.socket.emit('message-recived' , {_id : msg['_id'] , });
        observer.next(msg);
      });
    });
  }

  noRemoveMessage() {
    return Observable.create(observer => {
      this.socket.on('remove-message', msg => {
        observer.next(msg);
      });
    });
  }

  onRecivedMessage() {
    return Observable.create(observer => {
      this.socket.on('message-recived', msg => {
        observer.next(msg);
      });
    });
  }

  onTyping() {
    return Observable.create(observer => {
      this.socket.on('typing', msg => {
        observer.next(msg);
      });
    });
  }

  onTypingEnd() {
    return Observable.create(observer => {
      this.socket.on('typing-end', msg => {
        observer.next(msg);
      });
    });
  }

  getAllMessage(room) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.get<Object>(`${this.url}message/all/${room}` , {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }

  responseError(error : HttpErrorResponse) {
    if(error instanceof ErrorEvent){
      console.error(`back-end error : ${error.error.message}`);
    } else {
      console.error(`back-end developer send this error : ${error.message}`);
    }
    return throwError(error);
  }

}
