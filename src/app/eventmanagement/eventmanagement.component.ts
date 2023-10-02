import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the necessary modules

@Component({
  selector: 'app-eventmanagement',
  templateUrl: './eventmanagement.component.html',
  styleUrls: ['./eventmanagement.component.css']
})
export class EventmanagementComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  showTitleInfo: boolean = false;
  showDateInfo: boolean = false;
  eventForm: FormGroup;
  minDate: string; // To store the minimum allowed date

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form with validation rules
    this.eventForm = this.formBuilder.group({
      eventTitle: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]{1,20}$/)]],
      eventDate: ['', [Validators.required]],
      eventLocation: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
      eventDescription: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]]
    });

    // Calculate the minimum allowed date (one week from the current date)
    const today = new Date();
    today.setDate(today.getDate() + 7); // Add 7 days
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
    }
  }
}
