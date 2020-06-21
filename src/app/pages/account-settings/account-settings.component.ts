import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema( tema );
  }

  aplicarCheck(link: any) {
    /* console.log(link.classList) */
    let selectores: any = document.getElementsByClassName('selector')  // Recupera todos los elementos de clase selector
    for ( let ref of selectores) {
      ref.classList.remove('working');    // Elimino la clase workind de todos.
    }
    link.classList.add('working');  // Agrego a lo seleccionado la clase working
  }

  colocarCheck() {  // Coloca el Check bien inicia el programa.
    let selectores: any = document.getElementsByClassName('selector')  // Recupera todos los elementos de clase selector
    /* console.log(selectores); */
    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }

  }

}
