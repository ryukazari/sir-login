import { Injectable } from '@angular/core';

@Injectable()
//la url inicial http:// ... esta en proxy.conf.json
export class Constantes {
  //servicioBuscarEmail: string = 'http://localhost:3000/email/';
  servicioBuscarEmail: string = 'https://my-json-server.typicode.com/ryukazari/json-server-fake/email/';
  servicioVerificaCredencial: string = 'http://localhost:3000/listaservicios';


}
