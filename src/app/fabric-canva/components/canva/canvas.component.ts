import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { ActivatedRoute } from '@angular/router';
import { CanvasService} from "../../services/fabric-services";

@Component({
  selector: 'app-your-component',
  templateUrl: 'canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})

export class CanvasComponent implements OnInit {
  canvas!: fabric.Canvas;
  rect!: fabric.Rect;
  rond!: fabric.Circle;
  textbox!: fabric.Textbox;
  textboxArray: fabric.Textbox[] = [];
  lastTextboxID: number = 0;
  canvasName!: string;
  pages: any[] = [];
  pageNumber: number = 0;
  id!: string;

  constructor(private route: ActivatedRoute, private canvasService: CanvasService) {}

  ngOnInit() {
    this.run();
    this.canvasName = (document.querySelector('#monInput') as HTMLInputElement).value;
    console.log(this.rect);
  }

  run() {
    this.canvas = new fabric.Canvas('myCanvas');
    this.rect = new fabric.Rect({
      left: 200,
      top: 200,
      fill: 'blue',
      width: 100,
      height: 100
    });
    this.rond = new fabric.Circle({
      left: 200,
      top: 200,
      fill: 'blue',
      radius: 50
    });
  }

  addRect() {
    if (this.canvas) {
      console.log(this.canvas)
      console.log(this.rect);
      this.canvas.add(this.rect);
    } else {
      console.error('Le canvas n\'est pas initialisé.');
    }
  }


  addRond() {
    this.rond = new fabric.Circle({
      left: 400,
      top: 200,
      fill: 'blue',
      radius: 50
    });
    console.log(this.rond);
    this.canvas.add(this.rond);
  }

  addTextbox() {
    const textboxID: number = ++this.lastTextboxID;
    this.textbox = new fabric.Textbox(`Textbox ${textboxID}`, {
      left: 100,
      top: 100,
      fill: 'black',
      fontSize: 20,
      width: 150,
      height: 100,
      charSpacing: 5,
      borderColor: 'blue',
      hasBorders: true,
      backgroundColor: 'white'
    });
    this.textboxArray.push(this.textbox);
    this.canvas.add(this.textbox);
  }

  deleteSelection() {
    let selection: fabric.Object | null = this.canvas.getActiveObject();
    if (selection instanceof fabric.Group) {
      for (let objet of selection._objects || []) {
        console.log(objet);
        this.canvas.remove(objet);
      }
    } else if (selection instanceof fabric.Object) {
      console.log(selection);
      this.canvas.remove(selection);
    }
  }

  getAllValues(): any[] {
    let jsondata: any[] = [];
    let objects: fabric.Object[] = this.canvas.getObjects();
    for (let value of objects) {
      switch (value.type) {
        case 'textbox':
          let text: {} = {
            type: value.type,
            left: value.left,
            top: value.top,
            width: value.width,
            height: value.height,
            fill: value.fill,
            scaleX: value.scaleX,
            scaleY: value.scaleY,
            backgroundColor: value.backgroundColor,

          };
          jsondata.push(text);
          break;
        case 'rect':
          let rect: {} = {
            type: value.type,
            left: value.left,
            top: value.top,
            width: value.width,
            height: value.height,
            fill: value.fill,
            scaleX: value.scaleX,
            scaleY: value.scaleY,
            backgroundColor: value.backgroundColor
          };
          jsondata.push(rect);
          break;
        case 'circle':
          let circle: {} = {
            type: value.type,
            left: value.left,
            top: value.top,
            width: value.width,
            height: value.height,
            fill: value.fill,
            scaleX: value.scaleX,
            scaleY: value.scaleY,
            backgroundColor: value.backgroundColor,
          };
          jsondata.push(circle);
          break;
      }
    }
    // console.log(jsondata);
    return jsondata;
  }

  nouvellePage() {
    if (this.canvasName.length >= 6) {
      let dataPage = this.getAllValues();

      let value = {
        objects: dataPage,
        name: this.canvasName,
        id: this.pageNumber
      };

      console.log(value);
      this.pages.push(value);
      this.pageAdd();
      console.log(this.pages);

      this.pageNumber++;
    } else {
      alert('Vous devez donner un nom à votre page!');
    }
  }

  pageAdd() {
    this.canvasService.updateCanvas(this.id, this.pages).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
