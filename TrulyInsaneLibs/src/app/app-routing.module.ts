import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { FilecreateComponent } from './Components/filecreate/filecreate.component';
import { FileuploadComponent } from './Components/fileupload/fileupload.component';
import { SavedcreateComponent } from './Components/savedcreate/savedcreate.component';
import { SaveviewComponent } from './Components/saveview/saveview.component';
import { TypecreateComponent } from './Components/typecreate/typecreate.component';
import { TypesaveComponent } from './Components/typesave/typesave.component';
import { HelpComponent } from './Components/help/help.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'filecreate', component: FilecreateComponent },
  { path: 'fileupload', component: FileuploadComponent },
  { path: 'typecreate', component: TypecreateComponent },
  { path: 'typesave', component: TypesaveComponent },
  { path: 'savedcreate', component: SavedcreateComponent },
  { path: 'savedview', component: SaveviewComponent },
  { path: 'help', component: HelpComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
