import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events = []
  eventsUrl = "http://localhost:3000/api/events"
  constructor(private _http: HttpClient) { }

  getEvent(){
    return this._http.get<any>(this.eventsUrl)
    //.subscribe(
    //  res => this.events = res,
    //  err => console.log(err)
   // )
  }
}
