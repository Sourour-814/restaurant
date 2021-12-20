import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from '../commun/plat';
import { GestionplatsService } from '../services/gestionplats.service';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-modificationplat',
  templateUrl: './modificationplat.component.html',
  styleUrls: ['./modificationplat.component.scss']
})
export class ModificationplatComponent implements OnInit {

  public modifForm: FormGroup;
  plat: Plat;
  soumis = false;
  special: 'oui' | 'non' = 'non';
  constructor(private fb: FormBuilder,
  private route: ActivatedRoute,
  private gestionservice: GestionplatsService,
  private platsrvice: PlatService,
  private router : Router) { }
  getPlatInfo(id: string){
    this.platsrvice.getPlat(id).
    subscribe(
    (p: Plat) => this.motifPlat(p),
    (err: any) => console.log(err)
    );
    }
    motifPlat(plat: Plat) {
    this.modifForm.patchValue({
    id: plat.id,
    nom: plat.nom,
    categorie: plat.categorie,
    special: plat.special,
    label: plat.label,
    prix: plat.prix,
    description: plat.description
    });
    }
    public VerifErreur = (controlNom: string, erreurNom: string) =>
  {
  return this.modifForm.controls[controlNom].hasError(erreurNom);
  }
  onSoumission(){
  this.soumis=true;
  this.plat = this.modifForm.value;
  console.log(this.plat);
  this.gestionservice.modifier(this.plat.id, this.plat).subscribe(
  p => this.plat.id = p.id,
  error => console.log(error.status, error.message));
  this.router.navigate(["gestionplats"]);
  alert('SUCCESS!! :-) \n\n' + JSON.stringify(this.modifForm.value, null, 4));
  }
  

  ngOnInit(): void {{
    this.modifForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    categorie : new FormControl('', [Validators.required]),
    special: new FormControl(''),
    label: new FormControl(''),
    prix: new FormControl('', [Validators.required, Validators.pattern
    ("[0-9]*")]),
    description: new FormControl(''),
    commentaires: new FormControl(''),});
    this.route.paramMap.subscribe(parameterMap =>{
    const id = +parameterMap.get('id');
    this.getPlatInfo(id.toString());
    }
    );
    }
  }

}