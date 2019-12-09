import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AutenticacionService } from '../../service/autenticacion.service';
import { mensajeUsuarioInterface } from '../../interface/mensajeUsuarioInterface'

/** Error aparece cuando control de email is sucio, tocado, o enviado. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {
  loginForm: FormGroup;
  mensajeUsuario :  mensajeUsuarioInterface;
  loading :boolean = false;
  submitted :boolean = false;
  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private _location: Location, private api: AutenticacionService, private formBuilder: FormBuilder) {
  }
  backClicked() {
   this._location.back();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required]

   });
  }
  @Output() messageEventUsuario = new EventEmitter<mensajeUsuarioInterface>();

  ClickSiguiente() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('es invalido');
      return;
    }
    // this.mensajeUsuario.loading= true;
   // this.mensajeUsuario.email = this.loginForm.controls.username.value;
    this.mensajeUsuario = {
    loading: true,
    email:  this.loginForm.controls.username.value
   }
    console.log('el email: ' + this.mensajeUsuario.email);
    this.messageEventUsuario.emit(this.mensajeUsuario);


  }
}
