import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log(req);
    // add the header to the cloned request
    const authReq = req.clone({headers: req.headers.set('x-api-key', 'ebe6e29e62be48f98959ebd0a90974ef')});

    return next.handle(authReq);
  }
}
