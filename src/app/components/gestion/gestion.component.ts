import { Component, OnInit } from '@angular/core';
import {Student} from 'src/app/models/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public students;
  constructor(private service:EtudiantsService) { 
  
    
  }

  ngOnInit(): void {
    this.students=this.service.students;
  }

}
