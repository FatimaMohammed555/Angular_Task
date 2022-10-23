import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/shared/imovie';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  categories: any[] = [];
  movie:IMovie[]=[];

  constructor(private movService: MovieService
             ,private router: Router) {
            //  this.movie[0]={name:" " , description: ' ' ,image: ' '}
             this.movie.push({ name: ' ' , description: ' ' , image: ' ' });
             } 

  ngOnInit(): void {
  this.getCategories();
  }



  getCategories(){
    this.movService.getCategoriesFromApi().subscribe((res:any) => {
      console.log(res);
    this.categories = res.message;
    })
    }
  

  addMovie(){
       this.movService.AddMovie(this.movie[0])
        .subscribe({
        next: (res) => {this.router.navigateByUrl('/movie')},
        error: (err) =>{console.log(err); }
        }); 
    }


}
