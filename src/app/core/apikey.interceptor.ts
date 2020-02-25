import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log(req);
    // add the header to the cloned request
    console.log(environment.bungieAPI);
    const authReq = req.clone({headers: req.headers.set('x-api-key', environment.bungieAPI)});

    return next.handle(authReq);
  }
}
