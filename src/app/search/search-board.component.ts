import { Component, OnInit } from '@angular/core';
import { SearchService } from "./search.service";

@Component({
  selector: 'app-search-board',
  templateUrl: './search-board.component.html',
  styleUrls: ['./search-board.component.css'],
  providers: [SearchService]
})
export class SearchBoardComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit() {
  }

}
