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
      comprar:"pan",
      descuento:"10",
      comprado: false,
    };
    const producto2 = {
      comprar:"huevos",
      descuento:"10",
      comprado: false,
    };
    const producto3 = {
      comprar:"pasta",
      descuento:"10",
      comprado: false,
    };
    const producto4 = {
      comprar:"galletas",
      descuento:"10",
      comprado: false,
    };
    this.compras = [];
    this.compras.push(producto1);
    this.compras.push(producto2);
    this.compras.push(producto3);
    this.compras.push(producto4);
  }

  ngOnInit() {
  }

}
