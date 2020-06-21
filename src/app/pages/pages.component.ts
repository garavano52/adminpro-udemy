import { Component, OnInit } from '@angular/core';

declare function init_pluguins();   // Para llamar un pluguin. Está en custom.js. Si no, no andaba el menu

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_pluguins();
  }

}
