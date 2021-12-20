import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AjoutplatComponent } from '../ajoutplat/ajoutplat.component';
import { baseURL } from '../commun/baseurl';
import { Plat } from '../commun/plat';
import { GestionplatsService } from '../services/gestionplats.service';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-gestionplats',
  templateUrl: './gestionplats.component.html',
  styleUrls: ['./gestionplats.component.scss']
})

  export class GestionplatsComponent implements OnInit {
    plat : Plat;
    plats : Plat[] ;
    errMess: string;
    constructor(private platService : PlatService,
      private gestionplatsservice : GestionplatsService,
      public dialog: MatDialog,
      private router : Router) { }
      onsupprimer(plat : Plat) {
      this.gestionplatsservice.supprimer(plat.id)
      .subscribe( res=> alert('Plat supprimer avec SUCCESS!! :-) '));
      this.router.navigate(["gestionplats"]);
      }
    onmodifier(plat : Plat){
      this.router.navigate(["/modifierplat", plat.id]);}
    ngOnInit(): void {
    this.platService.getPlats().subscribe(plats => this.plats = plats,errmess => this.errMess = <any>errmess);
    }
   
    ajouter() {
    this.dialog.open(AjoutplatComponent, {width: '500px', height:'750px'})
    }

}



