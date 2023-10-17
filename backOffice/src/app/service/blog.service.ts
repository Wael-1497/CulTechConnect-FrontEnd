import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {blog} from "../models/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = "http://localhost:8087/blog";
  constructor(private http: HttpClient) {}

  getAllBlogPosts(): Observable<blog[]> {
    return this.http.get<blog[]>(`${this.baseUrl}/postss`);
  }

  getBlogPostById(postId: number): Observable<blog> {
    return this.http.get<blog>(`${this.baseUrl}/posts/${postId}`);
  }

  createBlogPost(blogPost: blog): Observable<blog> {
    return this.http.post<blog>(`${this.baseUrl}/posts`, blogPost);
  }

  updateBlogPost(postId: number, updatedBlogPost: blog): Observable<blog> {
    return this.http.put<blog>(`${this.baseUrl}/posts/${postId}`, updatedBlogPost);
  }

  deleteBlogPost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/posts/${postId}`);
  }
}
