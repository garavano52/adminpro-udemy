import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log('TERMINO!', mensaje)
    ).catch( error => console.error('Error en la promesa: ', error) );

  }

  ngOnInit(): void {
  }

  contarTres(): Promise<any> {
      return new Promise( (resolve, reject) => {
        let contador = 0;
        let intervalo = setInterval( () => {
          console.log(contador);
          contador += 1;
          if ( contador === 4 ) {
            resolve(true);
            // reject('Simplemente un Error');
            clearInterval(intervalo);
          }
        }, 1000 );
      });
  }

}
