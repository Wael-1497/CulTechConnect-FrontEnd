import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  currentYear: number = new Date().getFullYear();
  showEventDetails1: boolean = false;
  showEventDetails2: boolean = false;

  toggleEventDetails(eventNumber: number): void {
    if (eventNumber === 1) {
      this.showEventDetails1 = !this.showEventDetails1;
    } else if (eventNumber === 2) {
      this.showEventDetails2 = !this.showEventDetails2;
    }
  }
}
