import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as jwtDecode from 'jwt-decode';

import { environment } from '../../environments/environment';
import { User } from '../models/user';


@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    private apiRoot = `${environment.apiUrl}user/auth/`;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    private get_payload(user: any) {
      var payload = <User> jwtDecode(user.token);
      payload.token = user.token
      localStorage.setItem('currentUser', JSON.stringify(payload));
      this.currentUserSubject.next(payload);
      return payload
    }

    login(username: string, password: string) {
      return this.http.post<any>(this.apiRoot.concat('login/'), { username, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              return this.get_payload(user);
          }));
      }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    signup(username: string, email: string, password1: string, password2: string) {
      return this.http.post<any>(this.apiRoot.concat('signup/'), { username, email, password1, password2 })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              return this.get_payload(user);
          }));
    }
}


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `JWT ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}
