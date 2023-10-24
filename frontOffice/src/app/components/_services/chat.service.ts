import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import {catchError, Observable } from 'rxjs';
import {AbstractService} from './abstract.service';
import {envi} from "../../../environments/envi";
import {Chat} from "../_models/chat";

@Injectable({
  providedIn: 'root'
})
export class ChatService extends AbstractService {
  private url:string = envi.apiUrl + '/' + 'chats';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getAllChats(): Observable<Chat[]> {
    return this.client
      .get<Chat[]>(this.url, this.httpOptions)
      .pipe(catchError(this.handleError<Chat[]>('getting all chats', [])));
  }

  public addChat(name: string): Observable<Chat> {
    return this.client
      .post<Chat>(this.url, {name: name, nickName: localStorage.getItem(envi.userKey)}, this.httpOptions)
      .pipe(catchError(this.handleError<Chat>(`adding chat with name ${name}`)));
  }
}
