import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BloghttpService } from '../bloghttp.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allBlogs:any=[];

  constructor(public blogHttpService:BloghttpService) { }

  ngOnInit() {
    //this.allBlogs=this.blogHttpService.getAllBlogs();
    //we have to handle obseravle
    this.allBlogs=this.blogHttpService.getAllBlogs().subscribe(
      (data:any)=>{
        console.log(data['data']);
        this.allBlogs=data['data'];
         
      },
      error=>{
        console.log('error occured');
        console.log(error.errorMessage);
      }
    )
  }

}
