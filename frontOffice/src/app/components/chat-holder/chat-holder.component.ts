import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../_models/chat";

@Component({
  selector: 'app-chat-holder',
  templateUrl: './chat-holder.component.html',
  styleUrls: ['./chat-holder.component.css']
})
export class ChatHolderComponent {
  @Input() emittedChat?: Chat;
}