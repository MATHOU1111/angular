import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanvasComponent} from "./components/canva/canvas.component";
import { HttpClientModule} from "@angular/common/http";
import { SharedModule} from "../shared/shared.module";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CanvaListComponent } from './components/canva-list/canva-list.component';
import { CanvaListItemComponent } from './components/canva-list-item/canva-list-item.component';
import { CoreModule} from "../core/core.module";
import { RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CanvasComponent,
    LandingPageComponent,
    CanvaListComponent,
    CanvaListItemComponent
  ],
  exports:[
    CanvasComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    RouterModule
  ],
  providers: [

  ]
})
export class CanvaModule { }
