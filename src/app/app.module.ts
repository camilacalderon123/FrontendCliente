import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



//Imports de los componentes
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BarraLateralComponent } from './shared/barra-lateral/barra-lateral.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AgregarClienteComponent } from './clientes/agregar-cliente.component';
import { AppRoutingModule } from './app-routing.module';
import { EditarClienteComponent } from './clientes/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    BarraLateralComponent,
    HeaderComponent,
    FooterComponent,
    AgregarClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
