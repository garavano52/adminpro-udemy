import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'  // No es necesario importalo por ésto.
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes')); // Paso String a Objeto
    }
    this.aplicarTema( this.ajustes.tema );
  }

  aplicarTema(tema: string) {
    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

  guardarAjustes() {     //  Guardado en el Local Storage
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));  // Paso de Objeto a String
  }

}


interface Ajustes {
  temaUrl: string;
  tema: string;
};
