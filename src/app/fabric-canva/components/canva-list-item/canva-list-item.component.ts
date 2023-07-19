import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CanvasService} from "../../services/fabric-services";
import {Post} from "../../../social-media/models/post.model";
import { canvaListItem} from "../../models-canva/model.canva";

@Component({
  selector: 'app-canva-list-item',
  templateUrl: './canva-list-item.component.html',
  styleUrls: ['./canva-list-item.component.scss']
})
export class CanvaListItemComponent implements OnInit{
  constructor(private route: ActivatedRoute, private canvasService: CanvasService) {}

  @Input() ListItem!: canvaListItem;


ngOnInit() {

}

}
