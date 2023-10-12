import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PartershipService {
  readonly  API_URL = "http://localhost:8222";
  readonly ENDPOINT_PART= "/partnership/all-part";
  constructor(private httpClient: HttpClient) { }

  getPart(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_PART);
  }


}

