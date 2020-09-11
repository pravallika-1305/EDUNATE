import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from 'src/app/chat.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  messages:Observable<Message[]>;
  formValue:string;
  constructor(public chat:ChatService) { }
  

  ngOnInit(): void {
    this.messages = this.chat.conversation.asObservable().scan((acc,val) => acc.concat(val));
  }
  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
}
