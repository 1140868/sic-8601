import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Historic } from '../../model/historic';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  private linkAzure = 'https://lapr5-8601-catalog.azurewebsites.net/api/';
  private url = this.linkAzure + 'historic/';


  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService) { }

  getHistorics(): Observable<Historic[]> {
    return this.http.get<Historic[]>(this.url, this.getHeaders()); // Link não necessita de Token
  }

  getDotnetHistorics(): any {
    return this.http.get<any>(this.url);
  }

  getDotNetHistoricById(id: number): any {
    return this.http.get<any>(this.url + "/" + id);
  }


  getHeaders() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.authenticationService.userInfo.token,
    });
    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }


}
