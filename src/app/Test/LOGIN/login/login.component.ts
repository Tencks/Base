import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router:Router){}


  loginForm = new FormGroup({

    user_id : new FormControl(''),
    password : new FormControl('')
  })

  logoutButton = new FormGroup({
    token : new FormControl('', Validators.required)
  })

  ngOnInit(): void {
      
  }

onLogin(){
  localStorage.setItem('User', 'MASTER');
  this.router.navigate(['Factura']);
}
  // onLogin(form: LoginI) {
  //   this.api.loginByEmail(form).subscribe(data => {
  //     console.log(data);
  //     let dataResponse: ResponseI = data;
  //     console.log(dataResponse);
  //     if (dataResponse.token != null) {
  //       localStorage.setItem('token',dataResponse.token);  
  //       localStorage.setItem('cargo',dataResponse.cargo);
  //       localStorage.setItem('id',dataResponse.id);
  //       console.log("Login successful");
  //       this.api.checkMedicationResidenteStatus();
  //       this.api.checkMedicationLocalStatus();
  //       this.router.navigate(['homeResidentes']);
  //     } 
  //   }

  // onLogout(form: TokenI){
  //   this.api.Logout(form).subscribe(data =>{
  //     console.log(data);
  //     let tokenResponse:TokenI = data;
  //     console.log(tokenResponse);
  //   })
  // }


}
