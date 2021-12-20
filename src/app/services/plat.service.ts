import { Injectable } from '@angular/core';
import { Plat } from '../commun/plat';

import { Observable } from 'rxjs';
import {  catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../commun/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  //méthode qui retourne tous les plats à partir du tableau PLATS dans commun/plats.ts
  

    constructor(private http: HttpClient,
          private processHTTPMsgService: ProcessHTTPMsgService) { }
      getPlats(): Observable< Plat[]> {
          return this.http.get<Plat[]>(baseURL + 'plats').pipe(catchError(this.processHTTPMsgService.gestionErreur));
        }
      getPlat(id: string): Observable<Plat> {
            return this.http.get<Plat>(baseURL + 'plats/' + id).pipe(catchError(this.processHTTPMsgService.gestionErreur));
        }
      getSpecialPlat(): Observable<Plat> {
            return this.http.get<Plat[]>(baseURL + 'plats?special=true').pipe(map(plats => plats[0])).pipe(catchError(this.processHTTPMsgService.gestionErreur));
        }
      getPlatIds(): Observable<string[] | any> {
          return this.getPlats().pipe(map(plats => plats.map(plat => plat.id))).pipe(catchError(erreur => erreur));
      
        }
      }