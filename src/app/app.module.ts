import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FacebookModule } from 'ngx-facebook';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule, MatInputModule, MatCardModule, MdTooltipModule, MdSidenavModule, MdSnackBarModule, MatFormFieldModule, MdListModule, MdGridListModule, MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule, MdMenuModule} from '@angular/material';
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
import { SearchBoardComponent } from './search/search-board.component';
import { SearchItemComponent } from './search/search-item.component';
import {  TruncatePipe }   from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    ProfileComponent,
    SideNavbarComponent,
    SearchBoardComponent,
    SearchItemComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MdTooltipModule,
    MatInputModule,
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
