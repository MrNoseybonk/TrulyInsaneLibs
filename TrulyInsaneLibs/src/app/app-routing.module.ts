import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LibuploadComponent } from './Components/libupload/libupload.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'upload', component: LibuploadComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }