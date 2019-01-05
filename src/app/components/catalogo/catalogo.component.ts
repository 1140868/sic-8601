import { Component, OnInit } from '@angular/core';
import { Catalogo } from 'src/app/model/catalogo';
import { CatalogoService } from 'src/app/services/catalogo/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  catalogo : Catalogo[];

  constructor(private catalogoService : CatalogoService) { }

  ngOnInit() {
    this.getCatalogos();
  }

  getCatalogos() : void {
    this.catalogoService.getCatalogos()
    .subscribe(catalogos => this.catalogo = catalogos);
    }

    delete(catalogo: Catalogo): void {
      this.catalogo = this.catalogo.filter(h => h !== catalogo);
      this.catalogoService.deleteCatalog(catalogo).subscribe(
        catalogos => window.location.reload()   
      ); 
    }
}
