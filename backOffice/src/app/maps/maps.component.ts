import { Component, OnInit, AfterViewInit } from '@angular/core';
import {blog} from "../models/blog";
import {HttpClient} from "@angular/common/http";
import {BlogService} from "../service/blog.service";

declare const google: any;

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, AfterViewInit {

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

    ngAfterViewInit(): void {
    }
}
