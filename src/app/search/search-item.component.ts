import { Component, OnInit } from '@angular/core';
import { SearchService } from "./search.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  constructor(public searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  Results = <any>[];
  resultCame = false;

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4,dots: true};

  ngOnInit() {
  	this.activatedRoute.params.subscribe(
  		(params)=>{
        this.resultCame = false;
  			this.searchService.searchByQuery(params['searchQuery']).subscribe(
  				result=>{
            this.Results = result.results
            this.resultCame = true;
          },
  				error=>console.log(error)
  			);
  		}
  	);
  }

  getTitle(movie){
    if(movie.title == null){
      return movie.original_name;
    }
    return movie.title;
  }

  getDate(movie){
    if(movie.release_date == null){
      return movie.first_air_date;
    }
    return movie.release_date;
  }

}
