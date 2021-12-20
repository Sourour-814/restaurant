import { Component, Inject, Input, OnInit } from '@angular/core';
import { Plat } from '../commun/plat';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlatService } from '../services/plat.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-platdetail',
  templateUrl: './platdetail.component.html',
  styleUrls: ['./platdetail.component.scss']
})
export class PlatdetailComponent implements OnInit {
 

plat : Plat;
platIds: string[];
avant: string;
prochain: string;
  errMess: any;

  constructor(private platservice: PlatService,
  private route: ActivatedRoute,
  private location: Location,@Inject('BaseURL') public BaseURL) { }
  ngOnInit(): void {
    
  const id = this.route.snapshot.params['id'];
  this.platservice.getPlat(id).subscribe(plat => this.plat = plat, errmess => this.errMess = <any>errmess);

  this.platservice.getPlatIds().subscribe(platIds => this.platIds = platIds);
  this.route.params.pipe(switchMap((params: Params) => this.platservice.getPlat(params['id']))).subscribe(plat => { this.plat = plat;this.setAvantProchain(plat.id); });

  }
  goBack():void{ this.location.back(); }
  setAvantProchain(platId: string) {
    const index = this.platIds.indexOf(platId);
    this.avant= this.platIds[(this.platIds.length + index -1) % this.platIds.length];
    this.prochain = this.platIds[(this.platIds.length + index + 1) % this.platIds.length];
    }
}
