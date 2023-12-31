import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChatMessage} from "../_models/message";
import {Chat} from "../_models/chat";
import {Subscription} from "rxjs";
import {MessageService} from "../_services/message.service";
import {RxStompService} from "../_services/rx-stomp.service";
import {envi} from "../../../environments/envi";
import {Message} from "@stomp/stompjs";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy, OnChanges {
  messages?: ChatMessage[];
  @Input() chat?: Chat;
  subscription?: Subscription;
  currentUserName?: string | null;

  constructor(private messageService: MessageService,
              private rxStompService: RxStompService) {
  }

  ngOnInit(): void {
    this.currentUserName = localStorage.getItem(envi.userKey);
    this.subscription = this.rxStompService.watch('/topic/chats')
        .subscribe((message: Message) => this.addMessage(message));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chat != undefined) {
      this.getAllMessages();
    }
  }

  addMessage(message: Message): void {
    const chatMessage: ChatMessage = JSON.parse(message.body);
    if (chatMessage.chatId === this.chat?.id) {
      this.messages?.push(chatMessage);
    }
  }

  getAllMessages(): void {
    this.messageService.getAllMessages(this.chat?.id)
        .subscribe(messages => this.messages = messages);
  }

  sendMessage(message: string) {
    message = message.trim();
    if (message === '') {
      return;
    }
    this.rxStompService
        .publish({ destination: `/app/chats/${this.chat?.id}`,
          body: `{"from": "${localStorage.getItem(envi.userKey)}", "message":"${message}"}`});
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}