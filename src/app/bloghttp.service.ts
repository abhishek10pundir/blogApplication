import { Injectable } from '@angular/core';
//import http client to make request

import {HttpClient,HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
 

//import obseravle related code
import { Observable, Subject } from 'rxjs';
import { catchError, tap  } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class BloghttpService {
  public allBlogs;
  public currentBlog;
  public authToken='MGYzNTFhYWJhMWZhZWJiYWVlNTZlMGNlYjRhMTJjODI3MjNhMTkyYjA3YzQ5MWYxZmEwZGU2YWJkZTA5MGMxNGRhMDExZjBlOTU1YzgwY2I5OTQyZjEzNWQ4ODI2Y2Y0ZWZhMGRmMDM4OTU4YzUxNDgyYzg2NTQxNWIzZTJkMTYyOQ==';
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  constructor(private _http:HttpClient) {
    console.log('BLog http service is called');
   }

   //exeception handler

  private handlerError(err:HttpErrorResponse){
    console.log('Handle Http error calls');
    console.log(err.message);
    return Observable.throw(err.message);
  }
  public getAllBlogs():any{
    let myResponse=this._http.get(this.baseUrl+'/all?authToken=MGYzNTFhYWJhMWZhZWJiYWVlNTZlMGNlYjRhMTJjODI3MjNhMTkyYjA3YzQ5MWYxZmEwZGU2YWJkZTA5MGMxNGRhMDExZjBlOTU1YzgwY2I5OTQyZjEzNWQ4ODI2Y2Y0ZWZhMGRmMDM4OTU4YzUxNDgyYzg2NTQxNWIzZTJkMTYyOQ==') ;
     
    return myResponse;
  }
   public getSingleBlogInformation(currentBlogId):any{
     let myResponse=this._http.get(this.baseUrl+'/view/'+currentBlogId+'?authToken=MGYzNTFhYWJhMWZhZWJiYWVlNTZlMGNlYjRhMTJjODI3MjNhMTkyYjA3YzQ5MWYxZmEwZGU2YWJkZTA5MGMxNGRhMDExZjBlOTU1YzgwY2I5OTQyZjEzNWQ4ODI2Y2Y0ZWZhMGRmMDM4OTU4YzUxNDgyYzg2NTQxNWIzZTJkMTYyOQ==');
    return myResponse;
  }
  public createBlog(blogData):any{
    let myResponse=this._http.post(this.baseUrl+'/create?authToken='+ this.authToken,blogData);
    return myResponse;
  }
  public deleteBlog(blogId):any{
    let data={};
    let myResponse=this._http.post(this.baseUrl+'/'+blogId+'/delete?authToken='+this.authToken,data);
    return myResponse;
  }
  public editBlog(blogId,blogData):any{
    let myResponse=this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.authToken,blogData);
    return myResponse;
  }
}
