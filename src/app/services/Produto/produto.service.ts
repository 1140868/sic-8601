import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../../model/Produto';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private linkAzure = 'https://lapr5-8601-catalog.azurewebsites.net/api/';
  private url = this.linkAzure + 'product';
  private urlMat = this.linkAzure + 'material/';
  private urlMatFin = this.linkAzure + 'materialfinish/';
  private urlcategory = this.linkAzure + 'category/';
  private urldimension = this.linkAzure + 'dimension/';
  private uraddComponent = this.linkAzure + 'product/addComponent/';
  private urlproductmateria = this.urlMat + 'productmateria/';

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url, this.getHeaders()); // Link não necessita de Token
  }
  /**
   * ======================
   * DOTNET METHODS
   * ====================== 
   */

  /**
   * Returns a dotnet product
   * @param id product id
   */
  getDotNetProductById(id: number): any {
    return this.http.get<any>(this.url + "/" + id);
  }

  editDotnetProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(this.url + "/" + id, product);
  }
  createDotnetProduct(product: any): Observable<any> {
    return this.http.post(this.url, product);
  }
  /**
   * REturns all the materials in the dotnet Server
   */
  getDotnetMaterials(): any {
    return this.http.get<any>(this.urlMat);
  }

  /**
     * Returns the material in the dotnet Server
     * @param id material id
     */
  getDotnetMaterialById(id: number): Observable<any> {
    return this.http.get<any>(this.urlMatFin + id);
  }


  /**
   * Returns the all the categories in the dotnet server
   */
  getDotnetCategories(): Observable<any> {
    return this.http.get<any>(this.urlcategory);
  }
  deleteDotnetMaterial(productId: number, materialId: number): Observable<any> {
    return this.http.request('DELETE', this.urlproductmateria, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { MaterialId: materialId, ProductId: productId }
    });
  }

  createDotnetMaterialProduct(productId: number, materialId: number): Observable<any> {
    return this.http.post<any>(this.urlproductmateria, { ProductId: productId, MaterialId: materialId });
  }

  createDotnetDimension(
    height: number, heightMax: number, width: number, widthMax: number, depth: number, depthMax: number): Observable<any> {
    var dimension = {
      Height: height, HeightMax: heightMax,
      Width: width, WidthMax: widthMax,
      Depth: depth, DepthMax: depthMax
    }
    return this.http.post<any>(this.urldimension, dimension);
  }

  deleteDotnetProduct(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "/" + id);
  }

  addDotnetComponent(parentId: number, childId: number): Observable<any> {
    return this.http.put<any>(this.uraddComponent + parentId + "/" + childId, {});
  }

  getHeaders() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '',
    });
    if (this.authenticationService.userInfo != null) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.authenticationService.userInfo.token,
      });
    }
    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }



}
