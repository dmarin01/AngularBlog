import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interface/post.interface';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(
    private serviceService: ServicesService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.posts = this.serviceService.getAllpost();
  }

}
