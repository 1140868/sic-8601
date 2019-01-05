import { Component, OnInit } from '@angular/core';
import { EncomendaService } from 'src/app/services/encomenda/encomenda.service';
import { Encomenda } from 'src/app/model/Encomenda';

@Component({
  selector: 'app-encomenda-lista',
  templateUrl: './encomenda-lista.component.html',
  styleUrls: ['./encomenda-lista.component.css']
})
export class EncomendaListaComponent implements OnInit {

  encomenda: Encomenda[] = [];
  constructor(private encomendaService: EncomendaService) { }

  ngOnInit() {
    this.encomendaService.getEncomendasByClient()
    .subscribe(obj => {
      this.encomenda = obj;
      console.log(this.encomenda);
    });
  }

  setCanceled(EncomendaId: string): void { 
    console.log("Cancelado: "+EncomendaId);
    this.encomendaService.putEncomendaState(EncomendaId,"Cancelada");
    this.encomenda.forEach(enc => {
      if(enc._id == EncomendaId)
      enc.order_state = "Cancelada";
    });
  }
}
