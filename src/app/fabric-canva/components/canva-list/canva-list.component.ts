import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CanvasService} from "../../services/fabric-services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-canva-list',
  templateUrl: './canva-list.component.html',
  styleUrls: ['./canva-list.component.scss']
})
export class CanvaListComponent implements OnInit{
  canvasArray: Observable<ListItem[]>;
  constructor(private route: ActivatedRoute, private canvasService: CanvasService) {}
  ngOnInit() {
    this.canvasService.getAllCanvas()
      .subscribe(
        (data: any) => {
          this.canvasArray = data;
          console.log(this.canvasArray);
        })

  }
}
