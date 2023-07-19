import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./services/posts.services";
import {PostsResolver} from "./resolvers/posts.resolver";
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
