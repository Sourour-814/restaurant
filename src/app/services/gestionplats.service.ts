import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { baseURL } from '../commun/baseurl';
import { Plat } from '../commun/plat';
import { PlatService } from './plat.service';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class GestionplatsService {

  
  platIds: string[];
constructor(private http: HttpClient,
private processHTTPMsgService: ProcessHTTPMsgService,
private platservice: PlatService) {
this.platservice.getPlatIds().subscribe(platIds => this.platIds = platIds);
}
supprimer(id : string){
  const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  };
  return this.http.delete<Plat>(baseURL + 'plats/' + id, httpOptions)
  .pipe(catchError(this.processHTTPMsgService.gestionErreur));
  }
modifier(id : string, plat:Plat): Observable<Plat> {
  console.log(plat.nom);
  plat.image ='images/'+ plat.nom + '.png';
  plat.commentaires = [];
  return this.http.put<Plat>(baseURL + 'plats/' + id, plat)
  .pipe(map((res:any)=> {return res}
  ));
  }
ajouter(plat: Plat): Observable<Plat> {
const httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
};
plat.id =this.platIds.length.toString() ;
plat.image ='images/'+ plat.nom + '.png';
plat.commentaires = [];
return this.http.post<Plat>(baseURL + 'plats/', plat, httpOptions).pipe(catchError(this.processHTTPMsgService.gestionErreur));
}}
