import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function handleError(error: HttpErrorResponse) {
  let errorMessage = 'Uknown error!';
  if (error.error instanceof ErrorEvent) {
    //client side
    errorMessage = `Error: ${error.error.message}`;
  } else {
    //server side
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(() => new Error(errorMessage));
}
