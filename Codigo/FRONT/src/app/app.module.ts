import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { NuevoUsuarioComponent } from './pages/usuario/nuevo-usuario/nuevo-usuario.component';
import { ModalConfirmComponent } from './pages/usuario/modal-confirm/modal-confirm.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './pages/usuario/profile/profile.component';
import { ChangepassComponent } from './pages/usuario/changepass/changepass.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReclusoComponent } from './pages/recluso/recluso.component';
import { EditarReclusoComponent } from './pages/recluso/editar-recluso/editar-recluso.component';
import { NuevoReclusoComponent } from './pages/recluso/nuevo-recluso/nuevo-recluso.component';
import { ModalConfirmReclusoComponent } from './pages/recluso/modal-confirm-recluso/modal-confirm-recluso.component';
import { CeldasComponent } from './pages/celdas/celdas.component';
import { AgregarGuardiaComponent } from './pages/celdas/agregar-guardia/agregar-guardia.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent,
    NavbarComponent,
    NuevoUsuarioComponent,
    ModalConfirmComponent,
    EditarUsuarioComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    UnauthorizeComponent,
    FooterComponent,
    ProfileComponent,
    ChangepassComponent,
    ReclusoComponent,
    EditarReclusoComponent,
    NuevoReclusoComponent,
    ModalConfirmReclusoComponent,
    CeldasComponent,
    AgregarGuardiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
