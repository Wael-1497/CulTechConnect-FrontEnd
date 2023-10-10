import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-part',
  templateUrl: './show-part.component.html',
  styleUrls: ['./show-part.component.scss']
})
export class ShowPartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToPartInfo() {
    this.router.navigate(['/part']); // Remplacez 'autre-page' par le chemin configuré dans vos routes
  }
  redirectToUpPart() {
    this.router.navigate(['/up-part']); // Remplacez 'autre-page' par le chemin configuré dans vos routes
  }

}
