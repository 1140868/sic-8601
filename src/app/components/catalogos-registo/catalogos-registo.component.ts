import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo/catalogo.service';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/Produto/produto.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-catalogos-registo',
  templateUrl: './catalogos-registo.component.html',
  styleUrls: ['./catalogos-registo.component.css']
})
export class CatalogosRegistoComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  dataAct = new Date();
  lstProduto
  availableProdutos: any = [];
  selectedProduto: number;
  produtos: Produto[] = [];

  constructor(private router: Router, private catalogoService: CatalogoService,
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
    this.catalogoService.register(this.dataAct, this.model.name, this.produtos)
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