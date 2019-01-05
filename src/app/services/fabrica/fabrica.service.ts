import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Fabrica } from '../../model/fabrica';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
class Response { message: string };
@Injectable({
  providedIn: 'root'
})
export class FabricaService {
  private url = 'https://sic-it2.herokuapp.com/factorys';
  public msg = '';
  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  getFabricas(): Observable<Fabrica[]> {
    return this.http.get<Fabrica[]>(this.url, this.getHeaders());
  }
  getHeaders() {
    let headers = new HttpHeaders({
      'x-access-token': this.authenticationService.userInfo.token
    });

    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }

  register(nome: String, morada: String, latitude: Number, longitude: Number) {
    return new Observable<boolean>(observer => {
      this.http.post<Response>(this.url + '/', {
        nome: nome,
        morada: morada,
        latitude: latitude,
        longitude: longitude 
      }, this.getHeaders()).subscribe(data => {
        if (data.message == 'factory registered!') {
          console.log(data.message);
          observer.next(true);
        } else {
          console.log(data.message);
          this.msg = data.message;
          observer.next(false);
        }
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
          console.log(err);
          observer.next(false);
        });
    });
  }

}