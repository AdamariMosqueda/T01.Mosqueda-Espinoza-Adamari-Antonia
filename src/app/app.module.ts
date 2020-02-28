import { Articulo3Component } from './Articulo3/articulo3.component';
import { Articulo2Component } from './Articulo2/articulo2.component';
import { Articulo1Component } from './Articulo1/articulo1.component';
import { ImagenComponent } from './Imagen/imagen.component';
import { MenuComponent } from './Menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, ImagenComponent, Articulo1Component, Articulo2Component, Articulo3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
