import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';
import { User } from 'src/app/model/user';

class Response { message: string };
@Injectable({
  providedIn: 'root'
})
export class RegistarService {

  private Url = 'https://sic-it2.herokuapp.com/users'; 

  public msg = '';
  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { } 
  reset(): any {
    return new Observable<boolean>(observer => {
      this.http.put<Response>(this.Url+'/reset', {
        email: this.authenticationService.userInfo.email
      },this.getHeaders()).subscribe(data => {
        if (data.message == 'user removed!') {
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
  getHeaders() {
    let headers = new HttpHeaders({
      'x-access-token':
        this.authenticationService.userInfo.token
    });

    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }
  register(firstName: string, secondName: string, morada: string,  
    longitude:Number,
    latitude:Number,  
    email: string, password: string, dataServico: Date) {
    return new Observable<boolean>(observer => {
      this.http.post<Response>( this.Url + '/register', {
        firstname: firstName,
        lastname: secondName,
        morada: morada,
        latitude: latitude,
        longitude: longitude,
        email: email,
        password: password,
        gestor: false,
        administrador: false,
        cliente: true
      }).subscribe(data => {
        if (data.message == 'user registered!') {
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
