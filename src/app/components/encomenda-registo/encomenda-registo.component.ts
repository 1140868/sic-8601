import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Encomenda } from 'src/app/model/Encomenda';
import { EncomendaService } from 'src/app/services/encomenda/encomenda.service';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/Produto/produto.service';
import { AuthGuard } from '../guards/auth.guard';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-encomenda-registo',
  templateUrl: './encomenda-registo.component.html',
  styleUrls: ['./encomenda-registo.component.css']
})
export class EncomendaRegistoComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  //medicoId = 1;
  utenteId: Number;
  dataAct = new Date(); 
  produtos: Produto[] = [];
  availableProdutos: any = [];
  selectedProduto: number;

  constructor(
    private router: Router,
    private authGuard: AuthGuard,
    private productService: ProdutoService,
    private encomendaService: EncomendaService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.productService.getProdutos().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        this.availableProdutos.push({
          id: data[i].id,
          name: data[i].name + ' - ' + data[i].description + ' - ' + data[i].price,
          obj: data[i]
        });
      }
      if (this.authenticationService.userInfo != null) {
        if (this.authenticationService.product != null)
          this.produtos = this.authenticationService.product;
      }
    });
  }
  criarOrdem() {
    this.authenticationService.setProducts(this.produtos);
    if (!this.authGuard.canActivate()) {
      this.error = 'Your user cannot access criar Encomenda';
    } else {
      this.loading = true;
      this.error = '';
      if (this.produtos.length > 0) {
        this.encomendaService.postOrdem(this.dataAct, this.produtos)
          .subscribe(result => {
            this.loading = false;
            if (result === true) {
              this.router.navigate(['/app-encomenda-lista']);
              console.log('Encomenda Criada');
            } else {
              this.error = 'Encomenda não foi criada';
            }
          });
      } else {
        this.loading = false;
        this.error = 'Tem de adicionar pelo menos um Produto';
      }
    }
  }
  guardarProduto() {
    this.loading = true;
    let prod = new Produto();
    for (var i = 0; i < this.availableProdutos.length; i++) {
      if (this.availableProdutos[i].id == this.selectedProduto) {
        prod = JSON.parse(JSON.stringify(this.availableProdutos[i].obj));
        prod.quantity = this.model.quantidade;
        this.produtos.push(prod);
        break;
      }
    }
    this.loading = false;
    this.model = {};
    this.error = '';
    console.log(this.produtos);
  }
  setCategory(Produto: number): void {
    this.selectedProduto = Produto;
  }
}
