import { Component, OnInit, Input } from '@angular/core';
import { Colecoes } from 'src/app/model/colecoes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ColecoesService } from 'src/app/services/colecoes/colecoes.service';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/Produto/produto.service';

@Component({
  selector: 'app-colecoes-details',
  templateUrl: './colecoes-details.component.html',
  styleUrls: ['./colecoes-details.component.css']
})
export class ColecoesDetailsComponent implements OnInit {
  @Input() colecoes: Colecoes;
  
  model: any = {};
  loading = false;
  error = '';
  dataAct = new Date();
  lstProduto
  availableProdutos: any = [];
  selectedProduto: number;
  produtos: Produto[] = [];

  constructor(private route: ActivatedRoute,
    private colecoesService: ColecoesService,
    private location: Location,
    private productService: ProdutoService) { }

    ngOnInit(): void {
      this.getColecao();
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
  
    getColecao(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.colecoesService.getColecao(id)
        .subscribe(colecoes =>{ this.colecoes = colecoes;
          this.model.name=colecoes.name;
          for (var i = 0; i < this.colecoes.products.length; i++) {
          this.produtos.push( JSON.parse(JSON.stringify(this.colecoes.products[i])));
        };
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
      this.error = '';
      console.log(this.produtos);
    }
  
    setCategory(Produto: number): void {
      this.selectedProduto = Produto;
    }

    goBack(): void {
      this.location.back();
    }

    save(colecoes: Colecoes) {
      this.loading = true;
      this.colecoesService.save(this.colecoes, this.dataAct, this.model.name, this.produtos)
        .subscribe(result => {
          this.loading = false;
          if (result === true) {
            alert('Edited Sucess!');
          } else {
            console.log(result);
            this.error = 'Edited failed!';
          }
        });
    }
  
  }