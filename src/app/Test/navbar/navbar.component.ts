import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  urlActual!:string;
constructor(private router:Router) {}
ngOnInit(): void {
  this.urlActual = this.router.url;
}

generateTicket: boolean = false;

submitForm() {
  // Aquí puedes agregar la lógica para generar un ticket si la casilla de verificación está activa
  if (this.generateTicket) {
    this.generateTicketFunction();
  } else{
    window.location.reload();
  }
  // Aquí puedes agregar la lógica para enviar el formulario
}

generateTicketFunction() {
  // Aquí puedes agregar la lógica para generar el ticket
  window.print();
  alert('Se ha generado un ticket');
  window.location.reload();
}


Options(){

  const contentHtml = `
    <p>
        Aqui puedes modificar el color de fondo y más
    </p>
    <br>

        <form id="Config">

        <div class="col">
             <mat-label>Color de fondo</mat-label>
          <select class="form-select" id="FondoColor">
                 <option value="blanco">Blanco</option>
                 <option value="negro">Negro</option>
                 <option value="violeta">Violeta</option>
                 <option value="sorpresa">Sorpresa</option>
          </select>
        </div>

        <hr class="mx-n3">

        <div class="col">
          <mat-label>Color de Textos</mat-label>
         <select class="form-select" id="TextColor">
             <option value="normal">Normal</option>
              <option value="claro">Claro</option>
             <option value="alto-constraste">Alto Constraste</option>
             <option value="fluor">Fluor</option>
         </select>
        </div>

        <hr class="mx-n3">

        <div class="col">
         <mat-label>Idioma de las noticias</mat-label>
            <select class="form-select" id="Idioma">
                <option value="us">Ingles</option>
                <option value="jp">Japones</option>
                <option value="kr">Korea</option>
                <option value="it">Italiano</option>
            </select>
        </div>

      <hr class="mx-n3">

        </form> 
    `;

  Swal.fire({
    title: 'Configuraciones',
    icon: 'info',
    html:
     contentHtml,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      'Confirmar',
    cancelButtonText:
      'Cancelar',
  })
//   }).then((result) =>{
//     if (result.isConfirmed) {

// }

}

}
