import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { FilecreateComponent } from './Components/filecreate/filecreate.component';
import { FileuploadComponent } from './Components/fileupload/fileupload.component';
import { SavedcreateComponent } from './Components/savedcreate/savedcreate.component';
import { SaveviewComponent } from './Components/saveview/saveview.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'filecreate', component: FilecreateComponent },
  { path: 'fileupload', component: FileuploadComponent},
  { path: 'savedcreate', component: SavedcreateComponent },
  { path: 'savedview', component: SaveviewComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
