import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductDetailComponent} from "./product-detail";
import { AppComponent }  from './app.component';
import {routes} from './app.component';

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routes), FormsModule],
    declarations: [ AppComponent, ProductDetailComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
