import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Constantes } from 'src/app/constantes';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private extractData(res: Response) {
    const body = res;
    console.log('resp: ' + body);
    return body || { };
}

  constructor(private http: HttpClient, private cons: Constantes) { }

  /** email o codigo de alumno */
  verificaEmailService(email: string): Observable<any>  {
    console.log('Verificar email')
    const headers = new HttpHeaders({
      Authorization: '123456',
     // 'Authorization':'Basic ' + btoa(username + ':' + password),
      'Content-Type': 'application/json'
     // 'h2':'v2'  aqui puedes agregar mas cabeceras
      });
    console.log('estoy endpoint');
    return this.http.get<any>(this.cons.servicioBuscarEmail, {headers})
    .pipe(
      map(this.extractData)
    );
  }

  listaEmail(email: string): Observable<any>  {
    const headers = new HttpHeaders({
      Authorization: '123456',
     // 'Authorization':'Basic ' + btoa(username + ':' + password),
      'Content-Type': 'application/json'
     // 'h2':'v2'  aqui puedes agregar mas cabeceras
      });
    console.log('estoy endpoint ');

    return this.http.post<any>(this.cons.servicioBuscarEmail, email, {headers})
    .pipe(
      map(this.extractData)
    );

  }




}
