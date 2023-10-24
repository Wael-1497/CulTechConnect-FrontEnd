import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {AbstractService} from "../_services/abstract.service";
import { User } from '../_models/user';
import {Token} from "../_models/token";
import {envi} from "../../../environments/envi";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationClient extends AbstractService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public login(user: User): Observable<Token> {
    return this.client
      .post<Token>(envi.apiUrl + '/' + 'login', user, this.httpOptions)
      .pipe(catchError(this.handleError<Token>(`login failed for ${user.nickName}`)))
  }

  public register(user: User): Observable<HttpResponse<any>> {
    return this.client
      .post<HttpResponse<any>>(envi.apiUrl + '/' + 'register',
        user, {observe: 'response'})
      .pipe(catchError(this.handleError<HttpResponse<any>>(`register failed for ${user.nickName}`)));
  }
}
