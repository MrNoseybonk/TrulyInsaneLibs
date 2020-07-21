import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MainNavBarComponent } from './Components/main-nav-bar/main-nav-bar.component';
import { LibuploadComponent } from './Components/libupload/libupload.component';
import { FileuploadService } from './fileupload.service';
import { LoginService } from './login.service';
import { UrlService } from './url.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavBarComponent,
    LibuploadComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FileuploadService, LoginService, UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
