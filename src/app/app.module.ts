import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientiComponent } from './Page/clienti/clienti.component';
import { PagamentiComponent } from './Page/pagamenti/pagamenti.component';
import { ContrattiComponent } from './Page/contratti/contratti.component';
import { ShowClientiComponent } from './Page/clienti/show-clienti/show-clienti.component';
import { AddClientiComponent } from './Page/clienti/add-clienti/add-clienti.component';
import { AddPagamentiComponent } from './Page/pagamenti/add-pagamenti/add-pagamenti.component';
import { ShowPagamentiComponent } from './Page/pagamenti/show-pagamenti/show-pagamenti.component';
import { ShowContrattiComponent } from './Page/contratti/show-contratti/show-contratti.component';
import { AddContrattiComponent } from './Page/contratti/add-contratti/add-contratti.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ClientiComponent,
    PagamentiComponent,
    ContrattiComponent,
    ShowClientiComponent,
    AddClientiComponent,
    AddPagamentiComponent,
    ShowPagamentiComponent,
    ShowContrattiComponent,
    AddContrattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
