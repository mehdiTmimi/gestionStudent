import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent implements OnInit {

  constructor(private service:EtudiantsService) { }

  ngOnInit(): void {
  }

  public onAjouter(cne,nom,prenom,dateNaissance):void{
    let etudiant:Student;
    etudiant=new Student(cne.value,nom.value,prenom.value,dateNaissance.value);
    this.service.students.push(etudiant);

  }
}
