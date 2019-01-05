import { Component, OnInit, Input } from '@angular/core';
import { Catalogo } from 'src/app/model/catalogo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CatalogoService } from 'src/app/services/catalogo/catalogo.service';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/Produto/produto.service';

@Component({
  selector: 'app-catalogos-details',
  templateUrl: './catalogos-details.component.html',
  styleUrls: ['./catalogos-details.component.css']
})
export class CatalogosDetailsComponent implements OnInit {
  @Input() catalogo: Catalogo;
  
  model: any = {};
  loading = false;
  error = '';
  dataAct = new Date();
  lstProduto
  availableProdutos: any = [];
  selectedProduto: number;
  produtos: Produto[] = [];

  constructor(private route: ActivatedRoute,
    private catalogoService: CatalogoService,
    private location: Location,
    private productService: ProdutoService) { }

    ngOnInit(): void {
      this.getCatalogo();
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
  
    getCatalogo(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.catalogoService.getCatalogo(id)
        .subscribe(catalogo =>{ this.catalogo = catalogo;
          this.model.name=catalogo.name;
          for (var i = 0; i < this.catalogo.products.length; i++) {
          this.produtos.push( JSON.parse(JSON.stringify(this.catalogo.products[i])));
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

    save(catalogo: Catalogo) {
      this.loading = true;
      this.catalogoService.save(this.catalogo, this.dataAct, this.model.name, this.produtos)
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