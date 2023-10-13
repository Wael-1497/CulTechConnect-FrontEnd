import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PartershipService {
  readonly  API_URL = "http://localhost:8222";
  readonly ENDPOINT_PART= "/partnership/all-part";
  readonly ENDPOINT_ADDPART= "http://localhost:8082/partnership/add-part";
  constructor(private httpClient: HttpClient) { }

  getPart(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_PART);
  }
  createPart(id: any, partnership: any): Observable<any> {
    return this.httpClient.post(`${this.ENDPOINT_ADDPART}/${id}`, partnership);
  }


}

