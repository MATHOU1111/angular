import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanvasComponent} from "./components/canva/canvas.component";
import { HttpClientModule} from "@angular/common/http";
import { SharedModule} from "../shared/shared.module";
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    CanvasComponent,
    LandingPageComponent
  ],
  exports:[
    CanvasComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [

  ]
})
export class CanvaModule { }
