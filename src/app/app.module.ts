import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlatdetailComponent } from './platdetail/platdetail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PromotionService } from './services/promotion.service';
import { PlatService } from './services/plat.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './commun/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { LoginComponent } from './login/login.component';
import { GestionplatsComponent } from './gestionplats/gestionplats.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AjoutplatComponent } from './ajoutplat/ajoutplat.component';
import { ModificationplatComponent } from './modificationplat/modificationplat.component';
import {MatRadioModule} from '@angular/material/radio';
import { GestionplatsService } from './services/gestionplats.service';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlatdetailComponent,
    HeaderComponent,
    FooterComponent,
    AproposComponent,
    AcceuilComponent,
    ContactComponent,
    LoginComponent,
    GestionplatsComponent,
    AjoutplatComponent,
    ModificationplatComponent,
    RegisterComponent
  ],
  imports: [HttpClientModule,MatRadioModule,

    MatInputModule,
    MatProgressSpinnerModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,MatListModule,
    MatCardModule,
MatButtonModule,MatDialogModule,FormsModule
    
  ],
  providers:  [PlatService, PromotionService ,{provide: 'BaseURL', useValue: baseURL},ProcessHTTPMsgService,PlatService, PromotionService, GestionplatsService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
