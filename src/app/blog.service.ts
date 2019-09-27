import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T10:20:47.8542",
      "created": "2017-10-20T10:20:47.8542",
      "tags": [],
      "author": "admin",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "desciption": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-20T10:20:47.8542",
      "created": "2017-10-20T10:20:47.8542",
      "tags": ["comedy","humour","jokes"],
      "author": "admin",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h2>this is blog body</h2><p>Paragraph of blog</p>",
      "desciption": "this is blog 2 description",
      "title": "This is blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2017-10-20T10:20:47.8542",
      "created": "2017-10-20T10:20:47.8542",
      "tags": [],
      "author": "admin",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "desciption": "this is blog 3 description",
      "title": "This is blog 3"
    }

  ]
  public currentBlog:any;
  constructor() { 
    console.log('Service Constructor is called');
  }
  public getAllBlogs():any{
    return this.allBlogs;
  }
   public getSingleBlogInformation(currentBlogId):any{
    for(let blog of this.allBlogs){
      if(blog.blogId==currentBlogId){
        this.currentBlog=blog;
      }
    }
    
  }

 
}
