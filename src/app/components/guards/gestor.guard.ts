import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
@Injectable()
export class GestorGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }
    canActivate() {
        if (this.authenticationService.userInfo)
            if (this.authenticationService.userInfo.gestor)
                return true;
        this.router.navigate(['/app-login', { u: 'no' }]);
        return false;
    }
}