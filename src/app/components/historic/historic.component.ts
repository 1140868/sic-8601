import { Component, OnInit } from '@angular/core';
import { HistoricService } from 'src/app/services/historic/historic.service';
import { Historic } from 'src/app/model/historic';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  historics: Historic[] = [];
  constructor(
    private authenticationService: AuthenticationService,
    private historicService: HistoricService) { }

  ngOnInit() {
    this.historicService.getHistorics()
    .subscribe(historic => {
      this.historics = historic;
    })
  }

}
