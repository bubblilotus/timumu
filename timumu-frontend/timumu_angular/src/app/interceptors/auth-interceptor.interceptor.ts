import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  user = new User();
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let httpHeaders = new HttpHeaders();
    this.user = JSON.parse(sessionStorage.getItem('userdetails'));
    //login header
    if(this.user && this.user.password && this.user.email){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + btoa(this.user.email + ':' + this.user.password));
    }
    //xsrf on headers
    let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if(xsrf){
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);  
    }
    // httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = request.clone({
      headers: httpHeaders
    });
    return next.handle(xhr);
  }
}
