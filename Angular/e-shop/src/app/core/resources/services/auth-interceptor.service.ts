import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// only demo now
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('Request is on its way ' + req.url);
    const MODIFIED = req.clone({ headers: req.headers.append('Auth', 'xyz') });
    return next.handle(MODIFIED).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          //TODO: _ param to value: current time stamp, no cache
          // console.log('Response arrived, body data: ');
          // console.log(event.body);
        }
      })
    );
  }
}
