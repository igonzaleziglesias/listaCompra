import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: any[];

  constructor() {
    const producto1 = {
      nombre: 'Pan',
      img: 'assets/image/bread.png',
      comprado: true
    };
    const producto2 = {
      nombre: 'Pescado',
      img: 'assets/image/fish.png',
      comprado: false
    };
    const producto3 = {
      nombre: 'Carne',
      img: 'assets/image/meat.png',
      comprado: false
    };
    const producto4 = {
      nombre: 'Huevos',
      img: 'assets/image/egg.png',
      comprado: true
    };
    const producto5 = {
      nombre: 'Café',
      img: 'assets/image/coffee.png',
      comprado: false
    };
    const producto6 = {
      nombre: 'Leche',
      img: 'assets/image/milk.png',
      comprado: true
    };
    const producto7 = {
      nombre: 'Queso',
      img: 'assets/image/cheese.png',
      comprado: true
    };
    const producto8 = {
      nombre: 'Manzanas',
      img: 'assets/image/apple.png',
      comprado: false
    };
    const producto9 = {
      nombre: 'Chocolate',
      img: 'assets/image/chocolate.png',
      comprado: false
    };
    const producto10 = {
      nombre: 'Miel',
      img: 'assets/image/honey.png',
      comprado: true
    };
    const producto11 = {
      nombre: 'Cerveza',
      img: 'assets/image/beer.png',
      comprado: false
    };
    const producto12 = {
      nombre: 'Zanahorias',
      img: 'assets/image/carrot.png',
      comprado: false
    };
    this.productos = [];
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
    this.productos.push(producto4);
    this.productos.push(producto5);
    this.productos.push(producto6);
    this.productos.push(producto7);
    this.productos.push(producto8);
    this.productos.push(producto9);
    this.productos.push(producto10);
    this.productos.push(producto11);
    this.productos.push(producto12);
  }


  ngOnInit() {
  }

  cambio(compra) {
    compra.comprado = !compra.comprado;
  }
}
