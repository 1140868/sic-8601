import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProdutoService } from '../../services/Produto/produto.service';
import { Produto } from 'src/app/model/Produto';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
  styleUrls: ['./produto-view.component.css']
})
export class ProdutoViewComponent implements OnInit {
  // userInfo: User;
  @Input() product: Produto;
  materials: String = " ";
  discreteHeight: boolean;
  discreteDepth: boolean;
  discreteWidth: boolean;
  constructor(
    private route: ActivatedRoute,
    private productService: ProdutoService,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getDotNetProductById(id)
      .subscribe(product => {
      this.product = product;
        for (var i = 0; i < this.product.materials.length; i++) {
          var newString = this.product.materials[i].name + "; ";
          this.materials += newString;
        }
        this.findDiscreteMeasurements();
      });
  } 
  getProductCategory(): string {
    return '';//this.product.prod_category.toString();
  } 
  goBack(): void {
    this.location.back();
  }

  compare(name: string): boolean {
    if (name === this.product.name) return true;
    else return false;
  }

  findDiscreteMeasurements(): void {
    this.discreteHeight = this.product.dimension.height.isDiscrete;
    this.discreteWidth = this.product.dimension.width.isDiscrete;
    this.discreteDepth = this.product.dimension.depth.isDiscrete;
  }

}
