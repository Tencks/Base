import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-semanal',
  standalone: true,
  imports: [],
  templateUrl: './semanal.component.html',
  styleUrl: './semanal.component.css'
})
export class SemanalComponent {
  User = 'MASTER'; //USADO PARA SIMULAR EL USO DE USUARIOS PARA MOSTRAR X CONTENIDO

  datos = [ //DECLARAMOS UN ARRAY DE OBJETOS TEMPORAL QUE SE VA A REEMPLAZAR CON DATOS DINÁMICOS DESDE LA BD
  { id: 1, producto: 'PAN', precio: 1000.00, fecha: '12/02/24' },
  { id: 2, producto: 'BIZCOCHITOS', precio: 2500.00, fecha: '09/02/24' },
  { id: 3, producto: 'FACTURAS', precio: 360.00, fecha: '10/02/24' }
];

@Input() datosFiltrados: any[] = [];

filtrarDatos(term: string) {
  if (!term) {
    this.datosFiltrados = this.datos;
  } else {
    this.datosFiltrados = this.datos.filter(dato =>
      dato.producto.toLowerCase().includes(term.toLowerCase()) ||
      dato.precio.toString().toLowerCase().includes(term.toLowerCase()) ||
      dato.fecha.toLowerCase().includes(term.toLowerCase())
    );
  }
}
}