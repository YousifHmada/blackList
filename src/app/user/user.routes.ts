import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";

export const User_ROUTES: Routes = [
	{path:':id/profile', component: ProfileComponent}
];