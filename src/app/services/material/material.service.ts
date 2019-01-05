import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Material } from '../../model/material';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private linkAzure = 'https://lapr5-8601-catalog.azurewebsites.net/api/';
  private url = this.linkAzure + 'material/';
  private urlMatFin = this.linkAzure + 'materialfinish/';
  private urlFin = this.linkAzure + 'finish/';

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService) { }

    getMaterials(): Observable<Material[]> {
      return this.http.get<Material[]>(this.url, this.getHeaders()); // Link não necessita de Token
    }
    /**
     * ======================
     * DOTNET METHODS
     * ====================== 
     */
  
    /**
     * Returns a dotnet Material
     * @param id Material id
     */
    getDotNetMaterialById(id: number): any {
      return this.http.get<any>(this.url + "/" + id);
    }
  
    editDotnetMaterial(id: Number, material: any): Observable<any> {
      return this.http.put<any>(this.url + "/" + id, material);
    }

    createDotnetMaterial(material: any): Observable<any> {
      return this.http.post(this.url, material);
    }

    /**
     * 
     * @param material 
     * @param finish 
     */
    createDotNetMaterialFinish(material: any, finish: any): Observable<any>{
      return this.http.post(this.urlMatFin, material.id, finish.id);
    }
    getMaterialFinish(material: any, finish: any): Observable<any>{
      return this.http.get(this.urlMatFin, this.getHeaders());
    }
    /**
     * REturns all the materials in the dotnet Server
     */
    getDotnetMaterials(): any {
      return this.http.get<any>(this.url);
    }

    /**
     * REturns all the finishes in the dotnet Server
     */
    getDotnetFinishes(): any {
      return this.http.get<any>(this.urlFin);
    } 
    /**
       * Returns the finish in the dotnet Server
       * @param id material id
       */
    getDotnetMaterialById(id: number): Observable<any> {
      return this.http.get<any>(this.urlMatFin + id);
    } 
    deleteDotnetMaterial(id: number): Observable<any> {
      return this.http.delete<any>(this.url + "/" + id);
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
