import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit{

  facturaForm!: FormGroup;
  
  facturaDatos: any = {};

  constructor(private router:Router, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    
    this.facturaForm = this.formBuilder.group({
      Product : new FormControl('PAN', Validators.required),
      Valor : new FormControl('1', Validators.required)
    });


  }

  generateTicket: boolean = false;

  submitForm() {
   
    if(this.generateTicket){
      this.generateTicketFunction();
    }else{
      let FactDatos = this.facturaDatos = this.facturaForm.value;
      console.log('DATOS SIN TICKET',FactDatos);
      window.location.reload();
  
    }

  }

  // generateTicketFunction() {
  //   let TiketFactDatos = this.facturaDatos = this.facturaForm.value;
  //   console.log('DATOS DEL TICKET',TiketFactDatos);
  //   Swal.fire({
  //     title:`TICKET`,
  //     text:'Se ha generado un ticket',
  //     confirmButtonText:'ACEPTAR'
  //   }).then(() => {
  //     // Redirige o realiza alguna otra acción después de aceptar la notificación.
  //     // this.notificaionesService.agregarNotificacion(notificacion,'green-bg')
  //   window.location.reload();
  // });
  // }



  generateTicketFunction() {




    let TicketFactDatos = this.facturaDatos = this.facturaForm.value;
    console.log('DATOS DEL TICKET', TicketFactDatos);
  
    // Estilo CSS para el ticket
    let ticketStyles = `
      <style>
        body {
          font-family: Arial, sans-serif;
          width: 58mm;
          margin: 0;
          padding: 5mm;
          text-align: center;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        h2 {
          font-size: 1.5em;
        }
        p {
          font-size: 1em;
          margin: 0.5em 0;
        }
      </style>
    `;
  
    // Contenido del ticket
    let ticketContent = `
      <div>
        <img src="/assets/LOGO LAS COLONIAS.jpg" alt="Logo">
        <h2>Ticket</h2>
        <p><strong>Producto:</strong> ${TicketFactDatos.Product}</p>
        <p><strong>Valor:</strong> ${TicketFactDatos.Valor}</p>
      </div>
    `;
  
    // Abrir ventana emergente con el contenido del ticket
    let popupWindow = window.open('', '_blank', );
    if (popupWindow) {
      popupWindow.document.open();
      popupWindow.document.write(ticketStyles + ticketContent);
      popupWindow.document.close();
  
      // Esperar a que la ventana emergente haya cargado el contenido antes de imprimir
      popupWindow.onload = () => {
        if(popupWindow){
          popupWindow.print();
          popupWindow.close();
        }
      };
    } else {
      // Manejar el caso en que no se pueda abrir la ventana emergente
      console.error('No se pudo abrir la ventana emergente');
    }
  }
  




  
}
