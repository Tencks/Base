import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "./Test/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, RouterLink, RouterLinkActive, NavbarComponent]
})
export class AppComponent implements OnInit{
  title = 'PanaderiaAppHTTP';

 
  User = 'MASTER'; //USADO PARA SIMULAR EL USO DE USUARIOS PARA MOSTRAR X CONTENIDO


  constructor(){}

  ngOnInit(): void {
    
  }

  // Factura(){
  //   this.router.navigate([''])
  // }
  
  
  // Resumen(){
  //   this.router.navigate(['Resumen'])
  // }
  


 
}


