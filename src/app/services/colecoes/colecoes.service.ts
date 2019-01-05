import { Injectable } from '@angular/core';
import { Colecoes } from '../../model/colecoes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MessageService } from 'src/app/services/message/message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Produto } from 'src/app/model/Produto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class Response { message: string };
@Injectable({
  providedIn: 'root'
})
export class ColecoesService {

  private colecoesUrl = 'https://lapr5-8601-catalog.azurewebsites.net/api/Collection';  // URL to web api
  public msg = '';

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService, private messageService: MessageService) { }
  
    getHeaders() {
      let headers = new HttpHeaders({
        'x-access-token': this.authenticationService.userInfo.token
      });
  
      let httpOptions = {
        headers: headers
      };
      return httpOptions;
    }
  
    register(date: Date, name: String, produtos: Produto[]) {
      return new Observable<boolean>(observer => {
        var lstProd = [];
        for (var i = 0; i < produtos.length; i++) {
          lstProd.push({ "Id": produtos[i].id }); 
        } 
        this.http.post<Response>(this.colecoesUrl + '/', {
          date: date,
          name: name,
          Product: lstProd
        }, this.getHeaders()).subscribe(data => {
          console.log(data);
          if ((data as unknown as Colecoes).name == name) {
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
  
    
    getColecoes(): Observable<Colecoes[]> {
      this.messageService.add('ColecoesService: fetched Colecoes');
      return this.http.get<Colecoes[]>(this.colecoesUrl)
    }
  
    /** GET Colecoes by id. Will 404 if id not found */
    getColecao(id: number): Observable<Colecoes> {
      const url = `${this.colecoesUrl}/${id}`;
      return this.http.get<Colecoes>(url).pipe(
        tap(_ => this.log(`fetched colecoes id=${id}`)),
        catchError(this.handleError<Colecoes>(`getColecoes id=${id}`))
      );
    }
  
  
    /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a ColecoesService message with the ColecoesService */
    private log(message: string) {
      this.messageService.add(`ColecoesService: ${message}`);
    }

    /** DELETE: delete the colecoes from the server */
    deleteColecoes(Colecoes: Colecoes | number): Observable<Colecoes> {
      const id = typeof Colecoes === 'number' ? Colecoes : Colecoes.id;
      const url = `${this.colecoesUrl}/${id}`;
  
      return this.http.delete<Colecoes>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted colecoes id=${id}`)),
        catchError(this.handleError<Colecoes>('deleteColecoes'))
      );
    }

    save(colecoes: Colecoes, date: Date, name: String, produtos: Produto[]) {
      const id = typeof colecoes === 'number' ? colecoes : colecoes.id;
      const url = `${this.colecoesUrl}/${id}`;
      return new Observable<boolean>(observer => {
        var lstProd = [];
        for (var i = 0; i < produtos.length; i++) {
          lstProd.push({ "Id": produtos[i].id }); 
        } 
        this.http.put<Response>(url, {
          name: name,
          Product: lstProd
        }, this.getHeaders()).subscribe(data => {
          console.log(data);
          if ((data as unknown as Colecoes).name == name) {
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