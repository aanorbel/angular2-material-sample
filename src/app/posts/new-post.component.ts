import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit, OnDestroy {
  post: Post = { title: '', content: '' };
  sub: Subscription;

  constructor( private router: Router) { }

  onPostSaved(event) {
    console.log('post was saved!' + event);
    if (event) {
      this.router.navigate(['', 'posts']);
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}