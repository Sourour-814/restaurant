import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { PlatdetailComponent } from '../platdetail/platdetail.component';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { AproposComponent } from '../apropos/apropos.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { GestionplatsComponent } from '../gestionplats/gestionplats.component';
import { AjoutplatComponent } from '../ajoutplat/ajoutplat.component';
import { ModificationplatComponent } from '../modificationplat/modificationplat.component';
import { RegisterComponent } from '../register/register.component';
export const routes: Routes = [
  { path: 'acceuil',  component: AcceuilComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'apropos',     component: AproposComponent },
  { path: 'contact',     component: ContactComponent },
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
{ path: 'platdetail/:id', component: PlatdetailComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'gestionplats', component: GestionplatsComponent },
{ path: 'ajoutplat', component: AjoutplatComponent },
{ path: 'modifierplat/:id', component: ModificationplatComponent },
];