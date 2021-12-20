import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {
  public gestionErreur(erreur: HttpErrorResponse | any) {
    let errMsg: string;

    if (erreur.error instanceof ErrorEvent) {
      errMsg = erreur.error.message;
    } else {
      errMsg = `${erreur.status} - ${erreur.statusText || ''} ${erreur.error}`;
    }
    return throwError(errMsg);
  }
  constructor() { }
}
