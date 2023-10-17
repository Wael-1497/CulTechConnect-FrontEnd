import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Events } from '../models/Events';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { EventmanagementService } from  '../services/eventmanagement.service';
@Component({
  selector: 'app-eventmanagement',
  templateUrl: './eventmanagement.component.html',
  styleUrls: ['./eventmanagement.component.css'],
})
export class EventmanagementComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  showTitleInfo: boolean = false;
  showDateInfo: boolean = false;
  eventForm: FormGroup;
  minDate: string;
  events: Events[];
  activeEventId: number; // For tracking the active event being updated
  closeResult: string; // For handling the modal dialog

  constructor(
      private formBuilder: FormBuilder,
      private eventService: EventmanagementService,
      private modalService: NgbModal
  ) {
    this.eventForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]{1,20}$/)]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
      description: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)],
      ],
    });

    const today = new Date();
    today.setDate(today.getDate() + 7);
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents() {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events as Events[];
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const eventData = this.eventForm.value;
      this.eventService.createEvent(eventData).subscribe((response) => {
        console.log('Event created:', response);
        this.fetchEvents();
      });
    }
  }

  // Method to open the update event dialog
  openUpdateEventDialog(content, event: Events) {
    this.activeEventId = event.id;
    this.eventForm.patchValue({
      id: event.id,
      title: event.title,
      date: new Date(event.date).toISOString().split('T')[0],
      location: event.location,
      description: event.description
    });

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
    );
  }


  // Method to update an event
  updateEvent(event: Events) {
    this.eventService.updateEvent(event.id, event).subscribe((response) => {
      console.log('Event updated:', response);
      this.fetchEvents();
      this.activeEventId = null; // Clear the active event
    });

  }

  // Method to delete an event
  deleteEvent(eventId: number) {
    this.eventService.deleteEvent(eventId).subscribe(() => {
      console.log(`Event with ID ${eventId} deleted`);
      this.fetchEvents();
    });
  }

  // Method to toggle event details
  toggleEventDetails(eventId: number) {
    if (this.activeEventId === eventId) {
      this.activeEventId = null; // Close details if they are already open
    } else {
      this.activeEventId = eventId; // Open details for the clicked event
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


