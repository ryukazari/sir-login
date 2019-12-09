import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { SwiperComponent } from 'ngx-useful-swiper';
import { AutenticacionService } from '../../service/autenticacion.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutenticacionService]
})
export class LoginComponent implements OnInit {
  loading :boolean = false;
  mostrar :boolean = true;
  respuestEmail:any = [];
  errorEmail: boolean= false;
  mensajeError: string= "";


  constructor(private _location: Location, private autenticacionService: AutenticacionService) {
  }
  backClicked() {
   this._location.back();
  }

  ngOnInit() {
  }

  receiveMessageUsuario($event) {
  //  this.loading = $event.loading
    console.log(this.loading);
    this.verificaEmail($event.loading, $event.email);
    //this.startTimer();
  }
  receiveMessageContrasena($event){
    //this.mostrar = $event
    this.AtrasUsuario();
  }

  timeLeft: number = 0;
  interval;

verificaEmail (isloading : boolean, email: string){
  this.respuestEmail = [];
  this.loading = isloading ;
  this.autenticacionService.verificaEmailService(email)
  .subscribe((data: {}) => {
    console.log("salida del email");
    console.log(data);
    this.respuestEmail = data[0];
   // this.products = data;
   if(this.respuestEmail.estado == 1){
    console.log("email existe");
    console.log(this.respuestEmail.mensaje);
     this.usefulSwiper.swiper.slideNext();
     this.loading = false;
   }else{
    console.log(this.respuestEmail.estado);
    console.log(this.respuestEmail.mensaje);
   }

  },
  error => {
    console.log("entre al error");
    this.errorEmail= true;
    if(error.status =="401"){
        console.log("entre al 401  GAAA")
        this.mensajeError="Email erroneo";
    }else{
        if(error.status =="0"){
            console.log("No hay coneccion son el SIR")
            this.mensajeError="No hay conección con el SIR";
        }

    }

    console.log(error);
  //  this.alertService.error(error);
   // this.loading = false;

   // return throwError({ error: { message: 'No estas autorizado' } });
}


  );
  //this.loading = false;

}

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        //this.timeLeft = 60;
        clearInterval(this.interval);
        this.siguienteContrasena();
        this.loading =false;
      }
    },1000)
  }

  /** swiper */
  config: any = {

    pagination: { el: '.swiper-pagination', clickable: true },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    simulateTouch: false,
    spaceBetween: 0
  };
  @ViewChild('usefulSwiper',{static: false }) usefulSwiper: SwiperComponent;
  /** fin swiper */
  siguienteContrasena() {
  this.usefulSwiper.swiper.slideNext();
  }

  AtrasUsuario() {
    this.usefulSwiper.swiper.slidePrev();
  }

}
