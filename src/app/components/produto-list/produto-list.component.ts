import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/Produto/produto.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
    .subscribe(produto => {
      this.produtos = produto;
    })
  }

}
