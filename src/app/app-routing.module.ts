import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { PrincipalComponent } from './modulos/principal.component';
import { usuariosComponent } from './modulos/usuarios/usuarios.component';
import { validaruserGuard } from './guards/validaruser.guard';

const routes: Routes = [
  {
  path: '', component: PrincipalComponent,
  children:
  [
    {path: 'dashboard', component: DashboardComponent,      canActivate: [validaruserGuard]},
    {path: 'usuario', component: usuariosComponent,         canActivate: [validaruserGuard]},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
  ]
},

{path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
