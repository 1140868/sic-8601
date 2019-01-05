import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';

import { Fabrica } from '../../model/fabrica';
import { FabricaService } from '../../services/fabrica/fabrica.service';

@Component({
  selector: 'app-fabrica',
  templateUrl: './fabrica.component.html',
  styleUrls: ['./fabrica.component.css']
})
export class FabricaComponent implements OnInit {

  fabricas: Fabrica[] = [];
  constructor(private fabricaService: FabricaService) {
  }

  ngOnInit() {
    this.fabricaService.getFabricas()
      .subscribe(fabrica => {
        this.fabricas = fabrica;
      });
  }

}
