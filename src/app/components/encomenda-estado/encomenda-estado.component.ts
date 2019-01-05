import { Component, OnInit } from '@angular/core';
import { Encomenda } from 'src/app/model/Encomenda';
import { EncomendaService } from 'src/app/services/encomenda/encomenda.service';


@Component({
  selector: 'app-encomenda-estado',
  templateUrl: './encomenda-estado.component.html',
  styleUrls: ['./encomenda-estado.component.css']
})
export class EncomendaEstadoComponent implements OnInit {
   
  
  encomendas : Encomenda[] = [];
  encomendaState : String[] = ["Submetida","Validada","Atribuída","Em Produção","Em Embalamento","Pronta a Expedir","Expedida","Entregue","Cancelada","Rececionada"];
   
  constructor(
    private encomendaService: EncomendaService
  ) { 

  }

  ngOnInit() {
    this.encomendaService.getEncomendasAll().subscribe(data => {
      data.forEach(order => {
        if(order.order_state != "Cancelada" && order.order_state != "Rececionada"){
          this.encomendas.push(order);
        }
      });
      console.log(this.encomendas);
    });
  }

  setState(State: string,EncomendaId: string): void { 
    console.log(State);
    console.log(EncomendaId);

    this.encomendaService.putEncomendaState(EncomendaId,State);
  }

}
