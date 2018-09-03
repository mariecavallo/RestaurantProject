import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ContentModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule, FormsModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
