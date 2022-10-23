import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/shared/imovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movList: IMovie[]=[];


  constructor( private movService: MovieService
              ,private router: Router) { }

  ngOnInit(): void {
  this.getMovies();
  }


  getMovies(){
    this.movService.getMoviesFromApi().subscribe((res:any) => {
    console.log(res);
    this.movList = res.message;
    console.log(this.movList);
    console.log(res);
    })
    }
    



    deleteProd(prodId:any)
    {
    this.movService.DeleteProduct(prodId).subscribe({
    next:(res) => {
    this.router.navigateByUrl('/movie'),
    alert("The Movie has deleted Successfully")
    },
    error: (err) => {console.log(err); }
    });
    }
  

}
