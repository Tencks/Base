import { Component,OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HoyComponent } from './hoy/hoy.component';
import { AyerComponent } from './ayer/ayer.component';
import { SemanalComponent } from './semanal/semanal.component';
import { MensualComponent } from './mensual/mensual.component';
import { filter } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HoyComponent,AyerComponent,SemanalComponent,MensualComponent,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})

export class ResumenComponent implements OnInit{

  term:string = ''; 
  
  
  UrlActual!: string;

  @ViewChild(HoyComponent) hoyComponent!: HoyComponent; // Accede al componente hijo 
  @ViewChild(AyerComponent) ayerComponent!: AyerComponent; // Accede al componente hijo 
  @ViewChild(SemanalComponent) semanalComponent!: SemanalComponent; // Accede al componente hijo 
  @ViewChild(MensualComponent) mensualComponent!: MensualComponent; // Accede al componente hijo 

  constructor(private router:Router){
    //LO USAMOS PARA INTERCAMBIAR LOS ELEMENTOS HIJOS RENDERIZADOS EN EL DOOM
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.UrlActual = this.router.url;
    });  
  }

  buscar() {
    let componentesDatos: any[] = [];

    if (this.UrlActual.includes('Hoy')) {
      componentesDatos = this.hoyComponent.datos;

      const datosFiltrados = this.filtrarDatos(componentesDatos);

      console.log(datosFiltrados); // Puedes hacer lo que quieras con los datos filtrados, como mostrarlos en una tabla
      
      this.hoyComponent.datosFiltrados = datosFiltrados;

    } else if (this.UrlActual.includes('Ayer')) {
      componentesDatos = this.ayerComponent.datos;

      const datosFiltrados = this.filtrarDatos(componentesDatos);
      console.log(datosFiltrados); // Puedes hacer lo que quieras con los datos filtrados, como mostrarlos en una tabla
  
      this.ayerComponent.datosFiltrados = datosFiltrados;
    }else if (this.UrlActual.includes('Semanal')) {
      componentesDatos = this.semanalComponent.datos;

      const datosFiltrados = this.filtrarDatos(componentesDatos);
      console.log(datosFiltrados); // Puedes hacer lo que quieras con los datos filtrados, como mostrarlos en una tabla
  
      this.semanalComponent.datosFiltrados = datosFiltrados;
    }else if (this.UrlActual.includes('Mensual')) {
      componentesDatos = this.mensualComponent.datos;

      const datosFiltrados = this.filtrarDatos(componentesDatos);
      console.log(datosFiltrados); // Puedes hacer lo que quieras con los datos filtrados, como mostrarlos en una tabla
  
      this.mensualComponent.datosFiltrados = datosFiltrados;
    }


  }


  filtrarDatos(datos: any[]) {
    return datos.filter(dato =>
      dato.producto.toLowerCase().includes(this.term.toLowerCase()) ||
      dato.precio.toString().toLowerCase().includes(this.term.toLowerCase()) ||
      dato.fecha.toLowerCase().includes(this.term.toLowerCase())
    );

  }
  


  ngOnInit(): void {
      
  }

}

