import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Events} from "../models/Events";

@Injectable({
  providedIn: 'root',
})
export class EventmanagementService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  b: boolean = false;
  text: string = "";

  apiUrl = 'http://localhost:8083/events';


  constructor(private http: HttpClient) {}

  createEvent(event: Events): Observable<Events> {
    return this.http.post<Events>(
        this.apiUrl + "/addevent",
        event,
        this.httpOptions
    );  }

  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.apiUrl +"/allevents");
  }

  getEventById(idEvent: number): Observable<Events> {
    return this.http.get<Events>(this.apiUrl + "/event/" + idEvent);
  }

  updateEvent(id: number, event: Events): Observable<Events> {
    return this.http.put<Events>(
        this.apiUrl + "/updateevent",
        event,
        this.httpOptions
    );  }

  deleteEvent(idEvent: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteevent/${idEvent}`);
  }
}



