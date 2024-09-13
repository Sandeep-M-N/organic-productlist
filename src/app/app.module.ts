import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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

import { TwelveComponent } from './components/twelve/twelve.component';
import { HomepagetitleComponent } from './components/homepagetitle/homepagetitle.component';
import { HomepagecustomerreviewsComponent } from './components/homepagecustomerreviews/homepagecustomerreviews.component';
import { OurlatestproductsComponent } from './components/ourlatestproducts/ourlatestproducts.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './components/footer/footer.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FreshproductsComponent } from './components/freshproducts/freshproducts.component';

@NgModule({

  declarations: [
    AppComponent,
    ProductslistComponent,
    VegetablesComponent,
    LoginComponent,
    HomepageComponent,
    HomecarouselComponent,
    TwelveComponent,
    HomepagetitleComponent,
    HomepagecustomerreviewsComponent,
    OurlatestproductsComponent,
    ContactusComponent,
    FooterComponent,
    CarouselComponent,
    FreshproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FontAwesomeModule,
    CarouselModule
   
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
