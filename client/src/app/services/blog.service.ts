//blog service
// Path: client/src/app/services/blog.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';

const API_URL = 'http://localhost:3000/v1/blog/';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private http: HttpClient) { }
    // create blog
    createBlog(): Observable<any> {
        return this.http.post(API_URL, {});
    }
    // get all blogs
    getAllBlogs(): Observable<any> {
        return this.http.get(API_URL);
    }

    // get blog by id
    getBlogById(id: any): Observable<any> {
        return this.http.get(API_URL + id);
    }

    // update blog
    updateBlog(id: any, data: any): Observable<any> {
        return this.http.put(API_URL + 'blog/' + id, data);
    }

    // delete blog
    deleteBlog(id: any): Observable<any> {
        return this.http.delete(API_URL + 'blog/' + id);
    }
}
