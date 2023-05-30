import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'certificateList', component:CertificateListComponent},
  {path:'', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
