import { Injectable } from '@angular/core';
import { Promotion } from '../commun/promotion';

import { Observable} from 'rxjs';
import {  map,catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../commun/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  getPromotions(): Observable< Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }
  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id);
  }
  getSpecialPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?special=true').pipe(map(promotions => promotions[0])).pipe(catchError(this.processHTTPMsgService.gestionErreur));
    }
    
  }