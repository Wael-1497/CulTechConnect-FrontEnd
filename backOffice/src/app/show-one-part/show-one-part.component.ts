import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PartnershipService} from "../services/partnership.service";
import {Partnership} from "../models/partnership.model";

@Component({
  selector: 'app-show-one-part',
  templateUrl: './show-one-part.component.html',
  styleUrls: ['./show-one-part.component.scss']
})
export class ShowOnePartComponent implements OnInit {
  partnership: any;
  id: any;

  constructor(private route: ActivatedRoute, private partnershipService: PartnershipService) {}
  getPartnershipDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // Récupérer l'ID du partenariat depuis l'URL

    // Utiliser le service pour récupérer les détails du partenariat
    // @ts-ignore
    this.partnership = this.partnershipService.getPartnershipById(id);
  }

  ngOnInit(): void {
    this.partnership = new Partnership();
    this.id=this.route.snapshot.params['id'];
    this.partnershipService.getOnePart(this.id).subscribe(data => {console.log(data)
      this.partnership = data;
    }, error => console.log(error))
    // this.getPartnershipDetails();
  }

}
