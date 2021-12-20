import { Component, OnInit ,Inject} from '@angular/core';
import { Plat } from '../commun/plat';
import { PLATS } from '../commun/plats';
import { PlatService } from '../services/plat.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  plats : Plat[] ;
  //mémorise le plat à selectionner
  selectPlat : Plat;
  errMess: any;
  onSelect(p: Plat) {
    this.selectPlat = p;
    }
    
  constructor(private platService : PlatService,
    @Inject('BaseURL') public BaseURL)  { }

  ngOnInit(): void {
    this.platService.getPlats().subscribe(plats => this.plats = plats, errmess => this.errMess = <any>errmess);
  }

}
