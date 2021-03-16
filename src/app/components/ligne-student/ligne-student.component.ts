import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: '.app-ligne-student',
  templateUrl: './ligne-student.component.html',
  styleUrls: ['./ligne-student.component.scss']
})
export class LigneStudentComponent implements OnInit {

  @Input() public student:Student;
  @Input() public index:number;
  constructor(private service:EtudiantsService) { }

  ngOnInit(): void {
  }

  public onDeleteStudent():void{
     this.service.students.splice(this.index,1);
  }
}
