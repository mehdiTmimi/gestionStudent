import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { ListeEtudiantComponent } from './components/liste-etudiant/liste-etudiant.component';
import { LigneStudentComponent } from './components/ligne-student/ligne-student.component';
import {EtudiantsService} from './services/etudiants.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GestionComponent,
    AddEtudiantComponent,
    ListeEtudiantComponent,
    LigneStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EtudiantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
