import { Routes } from "@angular/router";
import { SearchItemComponent } from "./search-item.component";

export const Search_ROUTES: Routes = [
	{path:':searchQuery/shows', component:SearchItemComponent}
]