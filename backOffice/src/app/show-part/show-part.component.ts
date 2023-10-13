import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PartnershipService} from "../services/partnership.service";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-show-part',
  templateUrl: './show-part.component.html',
  styleUrls: ['./show-part.component.scss']
})
export class ShowPartComponent implements OnInit {
  parts: any = [];
  private modalService: NgbModal

  constructor(private router: Router, private partnershipService: PartnershipService) { }

  ngOnInit(): void {
      this.reloadData();
  }
  confirmDeletePart(partId: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this partnership?');

    if (confirmed) {
      // Call your deletePart function here with the partId
      this.deletePart(partId);
    }
  }

  redirectToPartInfo(partId: number) {
    this.router.navigate(['/part', partId]); // Remplacez 'autre-page' par le chemin configuré dans vos routes
  }
  redirectToUpPart() {
    this.router.navigate(['/up-part']); // Remplacez 'autre-page' par le chemin configuré dans vos routes
  }
  deletePart(id: number) {
    this.partnershipService.deletePart(id)
        .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
  }
  reloadData() {
    this.partnershipService.getPart().subscribe((datas: any[])=>{
      this.parts=datas;
    })
  }

}
