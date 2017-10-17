import { AuthService } from './auth-service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated()
            .then(
                    (authenticated: boolean) => {
                        if (authenticated) {
                            return true;
                        } else {
                            this.router.navigate(['/']);
                        }
                    }
                 );
    }

}
