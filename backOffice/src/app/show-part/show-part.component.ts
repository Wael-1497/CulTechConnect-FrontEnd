import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PartnershipService} from "../services/partnership.service";

@Component({
  selector: 'app-show-part',
  templateUrl: './show-part.component.html',
  styleUrls: ['./show-part.component.scss']
})
export class ShowPartComponent implements OnInit {
  parts: any = [];

  constructor(private router: Router, private partnershipService: PartnershipService) { }

  ngOnInit(): void {
    this.partnershipService.getPart().subscribe((datas: any[])=>{
      this.parts=datas;
    })
  }
  redirectToPartInfo(partId: number) {
    this.router.navigate(['/part', partId]); // Remplacez 'autre-page' par le chemin configuré dans vos routes
  }
  redirectToUpPart() {
    this.router.navigate(['/up-part']); // Remplacez 'autre-page' par le chemin configuré dans vos routes
  }

}
