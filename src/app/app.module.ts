import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './estructura/nav/nav.component';
import { ContentComponent } from './estructura/content/content.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { CATEGORIASComponent } from './modulos/categorias/categorias.component';
import { CLIENTESComponent } from './modulos/clientes/clientes.component';
import { PRODUCTOSComponent } from './modulos/productos/productos.component';
import { SERVICIOSComponent } from './modulos/servicios/servicios.component';
import { PEDIDOSComponent } from './modulos/pedidos/pedidos.component';
import { VENTASComponent } from './modulos/ventas/ventas.component';
import { COMPRASComponent } from './modulos/compras/compras.component';
import { usuariosComponent } from './modulos/usuarios/usuarios.component';
import { LoginComponent} from './modulos/login/login.component';
import { TipoComponent } from './modulos/tipo/tipo.component';
import { HeaderComponent } from './estructura/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    ContentComponent,
    FooterComponent,
    DashboardComponent,
    CATEGORIASComponent,
    CLIENTESComponent,
    PRODUCTOSComponent,
    SERVICIOSComponent,
    PEDIDOSComponent,
    VENTASComponent,
    COMPRASComponent,
    usuariosComponent,
    PrincipalComponent,
    TipoComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
