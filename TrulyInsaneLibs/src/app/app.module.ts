import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MainNavBarComponent } from './Components/main-nav-bar/main-nav-bar.component';
import { FilecreateComponent } from './Components/filecreate/filecreate.component';
import { LibService } from './lib.service';
import { LoginService } from './login.service';
import { UrlService } from './url.service';
import { FileuploadComponent } from './Components/fileupload/fileupload.component';
import { SavedcreateComponent } from './Components/savedcreate/savedcreate.component';
import { SaveviewComponent } from './Components/saveview/saveview.component';
import { NewuserComponent } from './Components/newuser/newuser.component';
import { LibcreateComponent } from './Components/libcreate/libcreate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavBarComponent,
    FilecreateComponent,
    FileuploadComponent,
    SavedcreateComponent,
    SaveviewComponent,
    NewuserComponent,
    LibcreateComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LibService, LoginService, UrlService, FilecreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
