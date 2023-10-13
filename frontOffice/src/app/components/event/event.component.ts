import {Component, OnInit, Renderer2} from '@angular/core';
import {ModalDismissReasons, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Partnership} from "../models/partnership";
import {PartershipService} from "../services/partership.service";
import {ActivatedRoute, Router} from "@angular/router";

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


  // END

  currentYear: number = new Date().getFullYear();
  showEventDetails1: boolean = false;
  showEventDetails2: boolean = false;
  closeResult: string;
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: {year: number, month: number};
  model: NgbDateStruct;
  constructor( private renderer : Renderer2, private modalService: NgbModal, private partershipService: PartershipService,private router: Router,private route: ActivatedRoute) {}   // ADD PARTNERSHIP
  // ADD PARTNERSHIP

  newPartnership(): void {
    this.submitted = false;
    this.partnership = new Partnership();
  }

  save() {
    this.partershipService.createPart(this.id, this.partnership)
        .subscribe(data => console.log(data), error => console.log(error));
    this.partnership = new Partnership();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  toggleEventDetails(eventNumber: number): void {
    if (eventNumber === 1) {
      this.showEventDetails1 = !this.showEventDetails1;
    } else if (eventNumber === 2) {
      this.showEventDetails2 = !this.showEventDetails2;
    }
  }
}


