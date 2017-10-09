import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { User_ROUTES } from "./user/user.routes";

const APP_ROUTES: Routes = [
	{path:'', redirectTo:'/user', pathMatch:'full'},
	{path:'user', component: UserComponent, children: User_ROUTES},
];


export const routing = RouterModule.forRoot(APP_ROUTES);