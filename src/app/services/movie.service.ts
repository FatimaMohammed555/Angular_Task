import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMovie } from '../shared/imovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  
 httpOptions = {headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer '+ localStorage.getItem('token')
  })}
    
    
//get all movies
getMoviesFromApi(){
  
console.log(this.httpOptions);
  // let Token= localStorage.getItem('token');
  // let headers = { 'Authorization': 'Bearer '+Token};
  
  return this.http.get(environment.API_URL + '/movies' , this.httpOptions)
  }

//get all categories
  getCategoriesFromApi(){
    
    return this.http.get(environment.API_URL + '/category' , this.httpOptions)
    }

//get movies by category name
  getMoviesByCategoryFromApi(catId:number){

    return this.http.get(environment.API_URL + '/moviesByCategory/' + catId , this.httpOptions)
}


getMovieByIdFromApi(id:number){
  return this.http.get(environment.API_URL + '/movies/' + id , this.httpOptions)
}

//add Movie
AddMovie(movie:IMovie)
  {
    return this.http.post(`${environment.API_URL}/movies`,movie,this.httpOptions)
  }
  
  //update Movie
EditProduct(movie:IMovie,movId:any)
{
  return this.http.put(`${environment.API_URL}/movies/${movId}`,movie,this.httpOptions)
   
}


//delete Movie
DeleteProduct(movId:number)
{
  return this.http.delete(`${environment.API_URL}/movies/${movId}`,this.httpOptions)
}
  
  
}
