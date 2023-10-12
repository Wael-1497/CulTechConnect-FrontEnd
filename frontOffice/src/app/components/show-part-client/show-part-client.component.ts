import {Component, OnInit, Renderer2} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PartershipService} from "../services/partership.service";


@Component({
  selector: 'app-show-part-client',
  templateUrl: './show-part-client.component.html',
  styleUrls: ['./show-part-client.component.scss'],
  providers: [PartershipService]
})
export class ShowPartClientComponent implements OnInit {
  closeResult: string;
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: {year: number, month: number};
  model: NgbDateStruct;
  parts: any = [];
  constructor( private renderer : Renderer2, private modalService: NgbModal, private partershipService: PartershipService) {

}
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }

  ngOnInit() {
    console.log('ngOnInit...');
    this.partershipService.getPart().subscribe((datas: any[])=>{
      this.parts=datas;
    })
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
  // End Checkout Button
}
