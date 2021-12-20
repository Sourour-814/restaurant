import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Feedback } from '../commun/feedback';
import { Observable } from 'rxjs';
import { baseURL } from '../commun/baseurl';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  contacter(feedback: Feedback): Observable<Feedback> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<Feedback>(baseURL + 'feedback/', feedback, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.gestionErreur));
    }
}
