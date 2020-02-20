import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListaProductosComponent implements OnInit {

  compras: any[];

  constructor() {
    const producto1 = {
      comprar: 'pan',
      comprado: true,
    };
    const producto2 = {
      comprar: 'huevos',
      comprado: false,
    };
    const producto3 = {
      comprar: 'pasta',
      comprado: false,
    };
    const producto4 = {
      comprar: 'galletas',
      comprado: true,
    };
    const producto5 = {
      comprar: 'pescado',
      comprado: false,
    };
    const producto6 = {
      comprar: 'carne',
      comprado: true,
    };
    this.compras = [];
    this.compras.push(producto1);
    this.compras.push(producto2);
    this.compras.push(producto3);
    this.compras.push(producto4);
    this.compras.push(producto5);
    this.compras.push(producto6);
  }

  ngOnInit() {
  }

  cambio(compra) {
    compra.comprado = !compra.comprado;
  }
}
