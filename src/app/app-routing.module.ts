import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanvasComponent} from "./fabric-canva/components/canva/canvas.component";
import {LandingPageComponent} from "./fabric-canva/components/landing-page/landing-page.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'social-media', loadChildren: () => import('./social-media/social-media.module').then(m => m.SocialMediaModule) },
  { path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
