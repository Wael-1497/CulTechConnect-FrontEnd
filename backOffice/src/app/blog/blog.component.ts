import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {blog} from "../models/blog";
import {BlogService} from "../service/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: blog[] = [];
  newBlog: blog = { title: '', content: '' };

  constructor(private http: HttpClient,private blogService: BlogService) {}

  ngOnInit() {
    this.getAllBlogPosts();
  }

  getAllBlogPosts() {
    this.blogService.getAllBlogPosts().subscribe((data) => {
      this.blogs = data;
    });
  }

  createBlogPost(blogPost: blog) {
    this.blogService.createBlogPost(blogPost).subscribe((data) => {
      this.newBlog = { title: '', content: '' }; // Clear the form
      this.getAllBlogPosts(); // Refresh the list of blog posts
    });
  }

  updateBlogPost(updatedBlogPost: blog) {
    this.blogService.updateBlogPost(updatedBlogPost.id, updatedBlogPost).subscribe(() => {
      this.getAllBlogPosts(); // Refresh the list of blog posts
    });
  }

  deleteBlogPost(postId: number) {
    this.blogService.deleteBlogPost(postId).subscribe(() => {
      this.getAllBlogPosts(); // Refresh the list of blog posts
    });
  }
}
