import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Fabrica } from '../../model/fabrica';
import { FabricaService } from '../../services/fabrica/fabrica.service';

@Component({
  selector: 'app-fabrica-rota',
  templateUrl: './fabrica-rota.component.html',
  styleUrls: ['./fabrica-rota.component.css']
})
export class FabricaRotaComponent implements OnInit { 
  model: any = {};
  loading = false;
  error = '';
  constructor(private router: Router,private FabricaService: FabricaService) { }

  ngOnInit() {
 
  }

}
