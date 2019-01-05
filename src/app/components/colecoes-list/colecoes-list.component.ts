import { Component, OnInit } from '@angular/core';
import { Colecoes } from 'src/app/model/colecoes';
import { ColecoesService } from 'src/app/services/colecoes/colecoes.service';

@Component({
  selector: 'app-colecoes-list',
  templateUrl: './colecoes-list.component.html',
  styleUrls: ['./colecoes-list.component.css']
})
export class ColecoesListComponent implements OnInit {

  colecoes : Colecoes[];

  constructor(private colecoesService : ColecoesService) { }

  ngOnInit() {
    this.getColecoes();
  }

  getColecoes() : void {
    this.colecoesService.getColecoes()
    .subscribe(colecoes => this.colecoes = colecoes);
    }

    delete(colecoes: Colecoes): void {
      this.colecoes = this.colecoes.filter(h => h !== colecoes);
      this.colecoesService.deleteColecoes(colecoes).subscribe(
        colecoes => window.location.reload()   
      ); 
    }

}
