import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const productGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // const authService = inject(AuthService);
  // return authService.isAuthenticated();
  const router = inject(Router);

  // if (authService.isLoggedIn()) {
  //   return true;
  // }

  return router.createUrlTree(['/'], {
    queryParams: { returnUrl: state.url },
  });
};
