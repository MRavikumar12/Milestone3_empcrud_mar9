import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //import forms module to use ngforms and
    //HttpClientModule to use get,put,post
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
