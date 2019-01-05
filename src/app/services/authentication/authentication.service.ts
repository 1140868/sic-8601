import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import * as jwt_decode from 'jwt-decode';
import { User } from '../../model/user';
import { Produto } from 'src/app/model/Produto';
class Token { token: string };
class Response { message: string };
@Injectable()
export class AuthenticationService {
  private authUrl = 'https://sic-it2.herokuapp.com/users/login';
  //verificar o servidor:porta
  public userInfo: User;
  authentication: Subject<User> = new Subject<User>();
  public product: Produto[];
  constructor(
    private http: HttpClient
  ) {
    this.userInfo = localStorage.userInfo && JSON.parse(localStorage.userInfo);
    this.product = localStorage.product && JSON.parse(localStorage.product);
    console.log(this.product);
  }
  setProducts(product: Produto[]) {
    console.log(product);
    this.product = product;
    localStorage.product = JSON.stringify(this.product);
  }
  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post<Token>(this.authUrl, {
        email: email,
        password: password
      })
        .subscribe(data => {
          if (data.token) {
            const tokenDecoded = jwt_decode(data.token);
            this.userInfo = {
              token: data.token,
              tokenExp: tokenDecoded.exp,
              cliente: tokenDecoded.cliente,
              gestor: tokenDecoded.gestor,
              latitude: tokenDecoded.latitude,
              longitude: tokenDecoded.longitude,
              id: tokenDecoded.id,
              administrador: tokenDecoded.administrador,
              morada: tokenDecoded.morada,
              email: tokenDecoded.user
            };
            localStorage.userInfo = JSON.stringify(this.userInfo);
            this.authentication.next(this.userInfo);
            observer.next(true);
          } else {
            this.authentication.next(this.userInfo);
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
            this.authentication.next(this.userInfo);
            observer.next(false);
          });
    });
  }
  logout() {
    if (this.userInfo != null) {
      this.product = null;
      localStorage.removeItem('product');
    }
    this.userInfo = null;
    localStorage.removeItem('userInfo'); 
    this.authentication.next(this.userInfo);
  }
  getHeaders() {
    let headers = new HttpHeaders({
      'x-access-token':
        this.userInfo.token
    });
    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }
}
