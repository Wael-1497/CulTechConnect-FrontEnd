import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Partnership} from "../models/partnership.model";
import {PartnershipService} from "../services/partnership.service";

@Component({
  selector: 'app-update-part',
  templateUrl: './update-part.component.html',
  styleUrls: ['./update-part.component.scss']
})
export class UpdatePartComponent implements OnInit {

  constructor(private route:ActivatedRoute, private partnershipService: PartnershipService) { }
  id:number;
  part : any;

  ngOnInit(): void {
    this.part = new Partnership();
    this.id=this.route.snapshot.params['id'];
    this.partnershipService.getOnePart(this.id).subscribe(data => {console.log(data)
      this.part = data;
    }, error => console.log(error))
  }

  updatePart() {
    this.partnershipService.updatePart(this.id,this.part).subscribe(data => console.log(data), error => console.log(error));
    this.part = new Partnership();
  }
}
