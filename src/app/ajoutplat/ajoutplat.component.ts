import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plat } from '../commun/plat';
import { GestionplatsService } from '../services/gestionplats.service';

@Component({
  selector: 'app-ajoutplat',
  templateUrl: './ajoutplat.component.html',
  styleUrls: ['./ajoutplat.component.scss']
})
export class AjoutplatComponent implements OnInit {
  public ajoutForm: FormGroup;
  plat: Plat;
  special: 'oui' | 'non' = 'non';
  soumis = false;
  commentaires: string[];
  id: string;
  constructor(private gestionservice: GestionplatsService,
  private router : Router) {
  }
  

  ngOnInit(): void {
    this.ajoutForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    categorie : new FormControl('', [Validators.required]),
    special: new FormControl(''),
    label: new FormControl(''),
    prix: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    description: new FormControl(''),
    commentaires: new FormControl(''),
    });
    }
    public VerifErreur = (controlNom: string, erreurNom: string) => {
      return this.ajoutForm.controls[controlNom].hasError(erreurNom);
      }
      onSoumission(){
      alert('SUCCESS!! :-) \n\n' + JSON.stringify(this.ajoutForm.value, null, 4));
      this.soumis=true;
      this.plat = this.ajoutForm.value;
      console.log(this.plat);
      this.gestionservice.ajouter(this.plat)
      .subscribe(
      plat => this.plat = plat,
      error => console.log(error.status, error.message));
      this.router.navigate(["gestionplats"]);
}}
