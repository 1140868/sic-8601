import { Component, OnInit } from '@angular/core';
import { ColecoesService } from '../../services/colecoes/colecoes.service';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/Produto/produto.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-colecoes-registo',
  templateUrl: './colecoes-registo.component.html',
  styleUrls: ['./colecoes-registo.component.css']
})
export class ColecoesRegistoComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  dataAct = new Date();
  lstProduto
  availableProdutos: any = [];
  selectedProduto: number;
  produtos: Produto[] = [];
  selectedCategory:number;
  constructor(private router: Router, private colecoesService: ColecoesService,
    private productService: ProdutoService) { }

  ngOnInit() {
    this.productService.getProdutos().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        this.availableProdutos.push({
          id: data[i].id,
          name: data[i].id + ' - ' + data[i].name + ' - ' + data[i].price,
          obj: data[i]
        });
      }
    });
  }

  guardarProduto() {
    this.loading = true;
    let prod = new Produto();
    for (var i = 0; i < this.availableProdutos.length; i++) {
      if (this.availableProdutos[i].id == this.selectedProduto) {
        prod = JSON.parse(JSON.stringify(this.availableProdutos[i].obj));
        var exite = false;
        for (var j = 0; j < this.produtos.length; j++) {
          if (this.selectedProduto == this.produtos[j].id) {
            exite = true;
            alert('Produto já existente!');
            break;
          }
        }
        if (!exite)
          this.produtos.push(prod);
        break;
      }
    }
    this.loading = false;
    //this.model = {};
    this.error = '';
    console.log(this.produtos);
  }

  setCategory(Produto: number): void {
    this.selectedProduto = Produto;
  }

  register() {
    this.loading = true;
    this.colecoesService.register(this.dataAct, this.model.name, this.produtos)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          alert('Registration Sucess!');
        } else {
          console.log(result);
          this.error = 'Registration failed!';
        }
      });
  }

}
