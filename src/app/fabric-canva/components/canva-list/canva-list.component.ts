import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CanvasService } from "../../services/fabric-services";
import { map, Observable } from "rxjs";
import { canvaListItem } from "../../models-canva/model.canva";

@Component({
  selector: 'app-canva-list',
  templateUrl: './canva-list.component.html',
  styleUrls: ['./canva-list.component.scss']
})
export class CanvaListComponent implements OnInit {
  canvasArray: Observable<canvaListItem[]> = new Observable<canvaListItem[]>();

  constructor(private route: ActivatedRoute, private canvasService: CanvasService) {}

  ngOnInit() {
    this.canvasArray = this.canvasService.getAllCanvas();
    console.log(this.canvasArray);
  }
}
