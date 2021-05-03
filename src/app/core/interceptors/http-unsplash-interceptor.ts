import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpUnsplashInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Accept-Version': 'v1',
        Authorization: 'Client-ID RMxltgcLisvzA7iaA2ieIE2R2hdwP9cHlS1ZO6iEYFc',
      }),
    });
    return next.handle(authReq);
  }
}
