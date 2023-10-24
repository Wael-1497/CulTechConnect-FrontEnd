import {Component, OnInit, Renderer2} from '@angular/core';
import {ModalDismissReasons, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Partnership} from "../_models/partnership";
import {PartershipService} from "../_services/partership.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import { loadStripe } from '@stripe/stripe-js';
import {HttpClient} from "@angular/common/http";
import { Events } from '../_models/Events';
import { EventmanagementService } from '../_services/eventmanagement.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  // ADD PARTNERSHIP

  partnership: Partnership = new Partnership();
  submitted = false;
  id: any;
  stripePromise = loadStripe(environment.stripe);
  isBudgetNumeric: boolean = true;
  closeResult: string;
  activeEventId: number | null = null;
  events: Events[] = [];
  currentYear: number = new Date().getFullYear();

  // END

  showEventDetails1: boolean = false;
  showEventDetails2: boolean = false;
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: {year: number, month: number};
  model: NgbDateStruct;
  constructor( private renderer : Renderer2,
               private modalService: NgbModal, private partershipService: PartershipService,
               private router: Router,private route: ActivatedRoute, private http: HttpClient, private eventService: EventmanagementService) {}   // ADD PARTNERSHIP

  // ADD PARTNERSHIP

  newPartnership(): void {
    this.submitted = false;
    this.partnership = new Partnership();
  }
  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: this.partnership.description,
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: this.partnership.budget*100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/#/event',
      successUrl: 'http://localhost:4200/#/part-client',
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
        .post(`${environment.serverUrl}/payment`, payment)
        .subscribe((data: any) => {
              // I use stripe to redirect To Checkout page of Stripe platform
              stripe.redirectToCheckout({
                sessionId: data.id,
              });
            },
            error => {
              console.error('Erreur lors de l\'appel à l\'API backend :', error);
              // Gérer l'erreur ici (par exemple, afficher un message d'erreur à l'utilisateur)
            }
        );
    this.save();
  }

  save() {
    this.partershipService.createPart(this.id, this.partnership)
        .subscribe(data => console.log(data), error => console.log(error));
    this.partnership = new Partnership();
  }
  onBudgetChange(value: any) {
    this.isBudgetNumeric = !isNaN(value) && value !== null && value !== '';
  }
  onSubmit() {
    this.submitted = true;
    if (!this.isBudgetNumeric) {
      console.error('Budget must be a numeric value.');
      return;  // Empêche la soumission du formulaire
    }
    this.pay();
  }

  gotoList() {
    this.router.navigate(['/part-client']);
  }

  // END
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }
  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
  ngOnInit() {
    this.fetchEvents();
    this.id=this.route.snapshot.params['id'];
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener('focus', function (){
        input_group[i].classList.add('input-group-focus');
      });
      input_group[i].children[0].addEventListener('blur', function (){
        input_group[i].classList.remove('input-group-focus');
      });
    }
  }

// Checkout Button
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  fetchEvents() {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events as Events[];
    });
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
  toggleEventDetails(eventId: number): void {
    if (this.activeEventId === eventId) {
      this.activeEventId = null;
    } else {
      this.activeEventId = eventId;
    }
  }
}


