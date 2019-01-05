import { Component, OnInit } from '@angular/core'; 
import { Fabrica } from '../../model/fabrica';
import { FabricaService } from '../../services/fabrica/fabrica.service'; 
import { Router} from '@angular/router';

@Component({
  selector: 'app-fabrica-registo',
  templateUrl: './fabrica-registo.component.html',
  styleUrls: ['./fabrica-registo.component.css']
})
export class FabricaRegistoComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  constructor(private router: Router,private FabricaService: FabricaService) { }

  register() {
    this.loading = true;
    this.FabricaService.register(
      this.model.nome,
      this.model.morada,
      this.model.latitude,
      this.model.longitude)
      .subscribe(result => {
        this.loading = false;
        if (result === true) { 
          this.error = 'Registration Sucess!'; 
        } else {
          console.log(result);
          this.error = 'Registration failed!';
        }
      });
  }
  ngOnInit() {
  }

}
