import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent} from './components/homepage/homepage.component';
import { HomecarouselComponent } from './components/homecarousel/homecarousel.component'; 
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TwelveComponent } from './components/twelve/twelve.component';



@NgModule({

  declarations: [
    AppComponent,
    ProductslistComponent,
    VegetablesComponent,
    LoginComponent,
    HomepageComponent,
    HomecarouselComponent,
    TwelveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SlickCarouselModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
