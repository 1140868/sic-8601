import { Component, OnInit } from '@angular/core';
import { RegistarService } from '../../services/registar/registar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  d = new Date();
  dataServ = new Date(this.d.getFullYear() + 2, this.d.getMonth(), this.d.getDate());
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private RegistarService: RegistarService) { }

  register() {
    this.loading = true;
    this.RegistarService.register(this.model.firstname,
      this.model.lastname,
      this.model.morada,
      this.model.longitude,
      this.model.latitude,
      this.model.email,
      this.model.password, this.dataServ)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/app-login']);
        } else {
          console.log(result);
          this.error = 'Registration failed!';
        }
      });
  }
  ngOnInit() {
  }

}
