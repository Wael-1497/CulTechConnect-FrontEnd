import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Partnership} from "../models/partnership.model";

@Injectable({
  providedIn: 'root'
})
export class PartnershipService {
  readonly  API_URL = "http://localhost:8222";
  readonly ENDPOINT_PART= "/partnership/all-part";
  readonly ENDPOINT_ONE_PART= "partnership/part";
  private baseUrl = 'http://localhost:8222/partnership/part';


  constructor(private httpClient: HttpClient) { }
  getPartnershipById(id: number): Observable<any> {
    const url = `${this.API_URL+this.ENDPOINT_ONE_PART}/${id}`;
    return this.httpClient.get<Partnership>(url);
  }
  getOnePart(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }


  getPart(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_PART);
  }

}
