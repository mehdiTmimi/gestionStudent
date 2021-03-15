import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/etudiant';

@Component({
  selector: 'app-ligne-student',
  templateUrl: './ligne-student.component.html',
  styleUrls: ['./ligne-student.component.scss']
})
export class LigneStudentComponent implements OnInit {

  @Input() public student:Student;

  constructor() { }

  ngOnInit(): void {
  }

}
