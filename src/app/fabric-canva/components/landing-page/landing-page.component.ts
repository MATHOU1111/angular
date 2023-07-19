import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CanvasService} from "../../services/fabric-services";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  // Je déclare le canva
  canvas: any[] = [];
  canvaTemplate : {} = {};

   // Importation des services pour les requêtes
  constructor(private route: ActivatedRoute, private canvasService: CanvasService) {}

  loadCanvas(): void {
    this.canvasService.getAllCanvas()
      .subscribe(
        (data: any) => {
          this.canvas = data;
          console.log(this.canvas);
        })

  }

  newCanva(): void{
        this.canvaTemplate = {};
        this.canvasService.postCanvas(this.canvaTemplate)
          .subscribe((objectData: any) => {
            // this.canvasService.redirectToNewPage(objectData);
            console.log("new");
          })
      }
  }



