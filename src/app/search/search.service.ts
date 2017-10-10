import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SearchService {


  constructor(private http: Http) { }

  searchByQuery(query: string) {
  	return this.http.get('https://black-list-movies.herokuapp.com/api/search/'+query+'/tmdb')
  			.map((data: Response)=>{
  				console.log(data.json());
  				return data.json()
  			});
  }

}
