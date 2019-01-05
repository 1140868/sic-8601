import { Injectable } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Encomenda } from 'src/app/model/Encomenda';

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {

  private url = 'https://sic-it2.herokuapp.com/orders/';
  public msg = '';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }
  postOrdem(dataAct: Date, produtos: Produto[]): any {
    return new Observable<boolean>(observer => {
      return this.http.post<any>(this.url, {
        user_email: this.authenticationService.userInfo.email
        , order_products: produtos
      }, this.getHeaders()).subscribe(data => {
        if (data.message == "The order has been successfully created") {
          console.log(data.message);
          observer.next(true);
        } else {
          console.log(data.message);
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
  getEncomendasByClient(): Observable<Encomenda[]> { 
    return this.http.get<Encomenda[]>(this.url + 'Client', this.getHeaders()); 
  }
  getEncomendasAll(): Observable<Encomenda[]> { 
    return this.http.get<Encomenda[]>(this.url , this.getHeaders()); 
  }
  putEncomendaState(EncomendaId : String,State: String): any { 
    return this.http.put<any>(this.url+EncomendaId ,{order_state: State
    }, this.getHeaders()).subscribe(data => {
      console.log(data);
    });
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
}
