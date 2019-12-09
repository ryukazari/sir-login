import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Location} from '@angular/common'; 
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error aparece cuando control de email is sucio, tocado, o enviado. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-panel-contrasena',
  templateUrl: './panel-contrasena.component.html',
  styleUrls: ['./panel-contrasena.component.css']
})
export class PanelContrasenaComponent implements OnInit {
  mostrar :boolean = false;
  usuario : string = "Carlos C. Trujillo"

  passwordFormControl = new FormControl('', [
    Validators.required
    
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private _location: Location) { 
  } 
  backClicked() { 
   this._location.back(); 
  } 

  @Output() messageEventContrasena = new EventEmitter<boolean>();
  ClickAtrasEmail(){
    this.mostrar= true;
    this.messageEventContrasena.emit(this.mostrar);
    this.passwordFormControl.reset();

  }

  ngOnInit() {
  }
}
 