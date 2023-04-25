import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { CustomOptionsModelResponsive } from '../../models/owl-options';
import { BlogService } from '../../services/blog.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  //test blogs with title, date, category, and content
  public blogs$: Observable<any[]>;

  constructor(private blogService: BlogService) { }

  public async ngOnInit(): Promise<void> {
    await this.getAllBlogs();
  }

  public async getAllBlogs(): Promise<void> {
    this.blogs$ = await this.blogService.getAllBlogs();
    this.blogs$.subscribe((blogs) => {
      console.log(blogs);
    });
  }


  public createBlog(): void {
    //call the service to create a blog post
    this.blogService.createBlog().subscribe((blog) => {
      console.log(blog);
    }
    );
  }

  customOptions: OwlOptions = CustomOptionsModelResponsive;

  items = [
    { src: "./assets/images/portfolio/5.jpg", button: 'Details page', author: 'Martin J.' },
    { src: "./assets/images/portfolio/6.jpg", button: 'Details page', author: 'App Design' },
    { src: "./assets/images/portfolio/7.jpg", button: 'Details page', author: 'Phone App' },
    { src: "./assets/images/portfolio/8.jpg", button: 'Details page', author: 'Gravity' },
    { src: "./assets/images/portfolio/2.jpg", button: 'Details page', author: 'Gravity' },
    { src: "./assets/images/portfolio/1.jpg", button: 'Details page', author: 'Gravity' },
  ]


}
