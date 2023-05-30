import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {
  
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const key = "3566b8d1bd8842bc667fde28790dfe0bef748e76";

    request = request.clone({setHeaders:{Authorization: 'Bearer '+ key}})
    return next.handle(request);
  }
}
