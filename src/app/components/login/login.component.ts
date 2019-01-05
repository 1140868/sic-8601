import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.activatedRoute.params.subscribe(params => {
      if (params['u'] !== undefined) {
        this.error = 'Your user cannot access';
      }
    });
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email,
      this.model.password)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          if (this.authenticationService.product != null && this.authenticationService.product.length > 0) {
            this.router.navigate(['/app-encomenda-registo']);
          } else
            this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
        }
      });
  }
}