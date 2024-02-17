
import { Routes } from '@angular/router';
import { FacturaComponent } from './Test/factura/factura.component';
import { ResumenComponent } from './Test/resumen/resumen.component';
import { NotFound404Component } from './Test/not-found404/not-found404.component';
import { HoyComponent } from './Test/resumen/hoy/hoy.component';
import { AyerComponent } from './Test/resumen/ayer/ayer.component';
import { SemanalComponent } from './Test/resumen/semanal/semanal.component';
import { MensualComponent } from './Test/resumen/mensual/mensual.component';
import { LoginComponent } from './Test/LOGIN/login/login.component';

export const routes: Routes = [
    {path:'Factura',  component: FacturaComponent},
    {path:'Login', component:LoginComponent},
    {path:'Resumen', component:ResumenComponent, 
    children:[
        {path:'Hoy', component:HoyComponent},
        {path:'Ayer', component:AyerComponent},
        {path:'Semanal', component:SemanalComponent},
        {path:'Mensual', component:MensualComponent}
    ]},
    {path:'',redirectTo:'Factura',pathMatch:'full'},
    {path:'**', component:NotFound404Component }
];
