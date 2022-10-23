import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/shared/imovie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {


  mov:IMovie[]=[];
  movID:any=0;
  CatgoryList:any[]=[];

  constructor(
    private movService: MovieService
    ,private router: Router
    ,private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params =>{
      this.movID=Number(params.get('pid'));
      this.getProductByID(this.movID);
      });

      this.movService.getCategoriesFromApi().subscribe({
      next:(response:any) => {
        console.log(response);
        this.CatgoryList = response.message;
      },
      error:(err) => {console.log(err); }
      });
      
  }

  private getProductByID(movID:number){
    this.movService.getMovieByIdFromApi(Number(movID)).subscribe({
    next:(response:any) => {
      console.log(response);
      this.mov = response;
    },
    error: (err) =>{console.log(err); }
    });
    console.log(movID);
  }


  editProduct()
  {
    this.movService.EditProduct(this.movID , this.mov).subscribe({
    next:(response:any) => {
      this.router.navigateByUrl('/movie');
      console.log(response);
      },
      error: (err) =>{console.log(err);}
    });
  }


}
