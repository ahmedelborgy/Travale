import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HeaderComponent } from './header/header.component';
import { TouristCarouselComponent } from './tourist-carousel/tourist-carousel.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import{ HttpClientModule} from '@angular/common/http';




import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ServicesComponent,
    DestinationsComponent,
    HeaderComponent,
    TouristCarouselComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,



    MatIconModule,
    MatInputModule,
    MatFormFieldModule,MatButtonModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
