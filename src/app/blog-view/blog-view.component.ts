import { Component, OnInit } from '@angular/core';

 
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BloghttpService } from '../bloghttp.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
   
  constructor(private _route:ActivatedRoute,private router:Router,private bloghttpService:BloghttpService,private toastr: ToastrManager,private location:Location) {
    console.log("blog view constructor is called");
   }

  ngOnInit() {
    console.log("ngOnInit");
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.bloghttpService.getSingleBlogInformation(myBlogId).subscribe(
      data=>{
        this.currentBlog=data['data'];
      },
      error=>{
        console.log(error.errorMessage);
      }
    )
     
  }
  public deleteThisBlog():any{
     console.log(this.currentBlog.blogId);
    this.bloghttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data);
        this.toastr.successToastr('Post deleted successfully', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      },
      error=>{
        console.log(error.errorMessage);
        this.toastr.errorToastr('This is error toast.', 'Oops!');
      }
    );
  }
  public goBackButton():any{
    return this.location.back();
  }
 

}
