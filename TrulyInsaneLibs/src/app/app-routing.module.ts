import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { FilecreateComponent } from './Components/filecreate/filecreate.component';
import { FileuploadComponent } from './Components/fileupload/fileupload.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'filecreate', component: FilecreateComponent },
  { path: 'fileupload', component: FileuploadComponent},
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
