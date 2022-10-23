import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/shared/imovie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // movies: any[] = [];
  movies:IMovie[]=[];
  categories: any[] = [];
  loading:boolean = false;

  constructor(private serv:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getCategories();
  }


  getMovies(){
    this.loading= true;
    this.serv.getMoviesFromApi().subscribe((res:any) => {
    console.log(res);
    this.movies = res.message;
    console.log(this.movies);
    setTimeout(() => {
      this.loading= false;
    }, 1000);
    console.log(res);
    })
    }
    
    getCategories(){
      this.loading= true;
      this.serv.getCategoriesFromApi().subscribe((res:any) => {
        console.log(res);
      this.categories = res.message;
      this.loading= false;
      })
      }
    
    
    filterCategory(event:any){
        let value = event.target.value;
        console.log(value);
    if(value == 'all'){
      this.getMovies()
    }else{
      this.getMovieByCatID(value);
    }
      }
    
    
    getMovieByCatID(CatId:number){
      this.loading= true;
    this.serv.getMoviesByCategoryFromApi(CatId).subscribe((res:any) => {
    console.log(res);
    this.movies = res;
    this.loading= false;
    })
    }


}
