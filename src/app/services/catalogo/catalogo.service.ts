import { Injectable } from '@angular/core';
import { Catalogo } from 'src/app/model/catalogo';
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
export class CatalogoService {



  private catalogosUrl = 'https://lapr5-8601-catalog.azurewebsites.net/api/Catalog';  // URL to web api
  public msg = '';

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService, private messageService: MessageService) { }

  getCatalogos(): Observable<Catalogo[]> {
    this.messageService.add('CatalogoService: fetched catalogo');
    return this.http.get<Catalogo[]>(this.catalogosUrl)
  }

  /** GET Catalogo by id. Will 404 if id not found */
  getCatalogo(id: number): Observable<Catalogo> {
    const url = `${this.catalogosUrl}/${id}`;
    return this.http.get<Catalogo>(url).pipe(
      tap(_ => this.log(`fetched catalogo id=${id}`)),
      catchError(this.handleError<Catalogo>(`getCatalogo id=${id}`))
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

  /** Log a CatalogoService message with the CatalogoService */
  private log(message: string) {
    this.messageService.add(`CatalogoService: ${message}`);
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

  register(date: Date, name: String, produtos: Produto[]) {
    return new Observable<boolean>(observer => {
      var lstProd = [];
      for (var i = 0; i < produtos.length; i++) {
        lstProd.push({ "IdProduct": produtos[i].id }); 
      } 
      this.http.post<Response>(this.catalogosUrl + '/', {
        date: date,
        name: name,
        Products: lstProd
      }, this.getHeaders()).subscribe(data => {
        console.log(data);
        if ((data as unknown as Catalogo).name == name) {
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

  /** DELETE: delete the catalog from the server */
  deleteCatalog(catalogo: Catalogo | number): Observable<Catalogo> {
    const id = typeof catalogo === 'number' ? catalogo : catalogo.id;
    const url = `${this.catalogosUrl}/${id}`;

    return this.http.delete<Catalogo>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted catalog id=${id}`)),
      catchError(this.handleError<Catalogo>('deleteCatalog'))
    );
  }

  save(catalogo: Catalogo, date: Date, name: String, produtos: Produto[]) {
    const id = typeof catalogo === 'number' ? catalogo : catalogo.id;
    const url = `${this.catalogosUrl}/${id}`;
    return new Observable<boolean>(observer => {
      var lstProd = [];
      for (var i = 0; i < produtos.length; i++) {
        lstProd.push({ "IdProduct": produtos[i].id }); 
      } 
      this.http.put<Response>(url, {
        name: name,
        Products: lstProd
      }, this.getHeaders()).subscribe(data => {
        console.log(data);
        if ((data as unknown as Catalogo).name == name) {
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