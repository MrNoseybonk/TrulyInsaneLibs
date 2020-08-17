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
import { ModalService } from './modal.service';
import { DomService } from './dom.service';
import { TypecreateComponent } from './Components/typecreate/typecreate.component';
import { TypesaveComponent } from './Components/typesave/typesave.component';
import { HelpComponent } from './Components/help/help.component';

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
    LibcreateComponent,
    TypecreateComponent,
    TypesaveComponent,
    HelpComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LibService, LoginService, UrlService, ModalService, DomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
