import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from "rxjs";

import {AbstractService} from './abstract.service';
import {envi} from "../../../environments/envi";
import {ChatMessage} from "../_models/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService extends AbstractService {
  private url: string = envi.apiUrl + '/' + 'chats';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getAllMessages(chatId: number | undefined): Observable<ChatMessage[]> {
    return this.client.get<ChatMessage[]>(this.url + '/' + chatId)
      .pipe(catchError(this.handleError<ChatMessage[]>("getting all messages", [])));
  }
}
