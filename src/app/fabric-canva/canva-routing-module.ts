import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanvasComponent} from "./components/canva/canvas.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {path: 'editor/:id', component: CanvasComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class CanvaRoutingModule { }
