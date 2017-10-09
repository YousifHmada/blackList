import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FacebookModule } from 'ngx-facebook';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MdTooltipModule, MdSidenavModule, MdSnackBarModule, MatFormFieldModule, MdListModule, MdGridListModule, MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule, MdMenuModule} from '@angular/material';
import { HttpModule } from "@angular/http";
// Import your library
import { SlickModule } from 'ngx-slick';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile.component';
import { routing } from "./app.routes";
import { UserService } from "./user/user.service";
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    ProfileComponent,
    SideNavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    MdTooltipModule,
    MdListModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MatFormFieldModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdMenuModule,
    MdAutocompleteModule,
    SlickModule.forRoot(),
    FacebookModule.forRoot()
  ],
  providers:[UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
