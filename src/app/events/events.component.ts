import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events  = [] 
  constructor(private _eventservice: EventService) { }

  ngOnInit(): void {
    this._eventservice.getEvent()
  .subscribe(
    res => this.events = res,
    err => console.log(err)
  )
    
  }

  
}
