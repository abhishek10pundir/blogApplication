import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BloghttpService } from '../bloghttp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {

  public authToken='authToken=MGYzNTFhYWJhMWZhZWJiYWVlNTZlMGNlYjRhMTJjODI3MjNhMTkyYjA3YzQ5MWYxZmEwZGU2YWJkZTA5MGMxNGRhMDExZjBlOTU1YzgwY2I5OTQyZjEzNWQ4ODI2Y2Y0ZWZhMGRmMDM4OTU4YzUxNDgyYzg2NTQxNWIzZTJkMTYyOQ==';
  public title:string;
  public description:string;
  public blogBody:string;
  public category="comedy";
  public possibleCategory=['comedy','darma','horror'];
  constructor(private blogHttpService:BloghttpService,private _route:ActivatedRoute,private router:Router,private toastr: ToastrManager,private vcr:ViewContainerRef) {
     
   }

  ngOnInit() {
     }
  public createBlog():any{
    let blogData={
      title:this.title,
      description:this.description,
      blogBody:this.blogBody,
      category:this.category

    }
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      (data:any)=>{
        console.log(data);
        this.toastr.successToastr('Post posted', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)
      },
      error=>{
        console.log(error.errorMessage);
        this.toastr.errorToastr('This is error toast.', 'Oops!');
      }
    )
  }

}
