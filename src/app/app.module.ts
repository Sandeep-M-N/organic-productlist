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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'


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
    ContactusComponent
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
    MatFormFieldModule
   
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
