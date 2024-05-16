import { Component, OnInit } from '@angular/core';
import { Observable, map } from "rxjs";
import { Post } from "../../models/post.model";
import { ActivatedRoute } from '@angular/router';
import {PostsService} from "../../services/posts.services";

@Component({

  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private postService: PostsService) { }

  posts$!: Observable<Post[]>;

  ngOnInit() {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );

    this.posts$.subscribe(posts => {
      console.log(posts); // Affiche les données dans la console
    });
  }

  onPostCommented( postCommented:{ comment:string, postId:number }){
    this.postService.addNewComment(postCommented)
  }

  protected readonly encodeURI = encodeURI;
}
