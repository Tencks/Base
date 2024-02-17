import { Component, Input } from '@angular/core';
import { AppComponent } from '../../../app.component';


@Component({
  selector: 'app-hoy',
  standalone: true,
  imports: [],
  templateUrl: './hoy.component.html',
  styleUrl: './hoy.component.css'
})
export class HoyComponent {
  User = 'MASTER'; //USADO PARA SIMULAR EL USO DE USUARIOS PARA MOSTRAR X CONTENIDO
  caja = 5000;  //FICITICIA

  datos = [ //DECLARAMOS UN ARRAY DE OBJETOS TEMPORAL QUE SE VA A REEMPLAZAR CON DATOS DINÁMICOS DESDE LA BD
    { id: 1, producto: 'PAN', precio: 1000.00, fecha: '14/02/24' },
    { id: 2, producto: 'BIZCOCHITOS', precio: 2500.00, fecha: '14/02/24' },
    { id: 3, producto: 'FACTURAS', precio: 360.00, fecha: '14/02/24' }
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


  calcTotal(): number {
    return this.datos.reduce((total, dato) => total + dato.precio, 0);
  }

  calcTotalCAJA(): number {
    return this.datos.reduce(( total, dato) =>  total + dato.precio , 5000);
  }


}