
import { BrowserModule } from '@angular/platform-browser';
import {NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Constantes } from 'src/app/constantes';

/** angular material */
import { MaterialModule } from './angular-material';
import { PanelUsuarioComponent } from './componentes/panel-usuario/panel-usuario.component';
import { PanelContrasenaComponent } from './componentes/panel-contrasena/panel-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    PanelUsuarioComponent,
    PanelContrasenaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [Constantes],
  bootstrap: [AppComponent]
})
export class AppModule { }
