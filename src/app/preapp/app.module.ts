import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FacebookModule } from 'ngx-facebook';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { MdSnackBarModule, MatFormFieldModule, MdListModule, MdGridListModule, MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule, MdMenuModule} from '@angular/material';
import { HttpModule } from "@angular/http";
// Import your library
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MdListModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MatFormFieldModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
