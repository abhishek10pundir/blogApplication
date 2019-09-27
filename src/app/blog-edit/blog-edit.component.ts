import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BloghttpService } from '../bloghttp.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {
  public possibleCategory = ['comedy', 'darma', 'horror'];
  public currentBlog;
  constructor(private _route: ActivatedRoute, private router: Router, private bloghttpService: BloghttpService, private toastr: ToastrManager) { }

  ngOnInit() {
    console.log("ngOnInit");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');

    this.bloghttpService.getSingleBlogInformation(myBlogId).subscribe(
      (data: any) => {
        this.currentBlog = data['data'];
        console.log("check");
        console.log(this.currentBlog);
      },
      error => {
        console.log('errrrrrrrrror');
        console.log(error.errorMessage);
      }
    )
  }
  public editThisBlog(): any {
    this.bloghttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      (data: any) => {

        this.toastr.successToastr('Post edited', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        }, 1000)
      },
      error => {
        console.log(error.errorMessage);
        this.toastr.errorToastr('This is error toast.', 'Oops!');
      }
    )
  }

}
