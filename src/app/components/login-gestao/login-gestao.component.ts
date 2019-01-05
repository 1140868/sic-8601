import { Component, OnInit } from '@angular/core';
import { RegistarService } from '../../services/registar/registar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';


@Component({
  selector: 'app-login-gestao',
  templateUrl: './login-gestao.component.html',
  styleUrls: ['./login-gestao.component.css']
})
export class LoginGestaoComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  d = new Date();
  dataServ = new Date(this.d.getFullYear() + 2, this.d.getMonth(), this.d.getDate());
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private RegistarService: RegistarService) { }
  ngOnInit() { }
  reset() {

    this.loading = true;
    this.RegistarService.reset()
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/app-login']);
        } else {
          console.log(result);
          this.error = 'Ocurreu um erro...';
        }
      });


  }

}
