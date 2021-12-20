import { Component, Inject, OnInit } from '@angular/core';
import { Plat } from '../commun/plat';
import { Promotion } from '../commun/promotion';
import { PlatService } from '../services/plat.service';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  plat : Plat;
  promotion : Promotion;
  constructor(private platservice: PlatService,
    private promotionservice: PromotionService,@Inject('BaseURL') public BaseURL) { }
    platerrMess: string;
  ngOnInit(): void {
    this.platservice.getSpecialPlat().subscribe(plat => this.plat = plat,platerrMess=>this.platerrMess= <any> platerrMess);
      this.promotionservice.getSpecialPromotion().subscribe(promotion => this.promotion=promotion, platerrMess=> this.platerrMess= <any> platerrMess);
  }
  }
  


