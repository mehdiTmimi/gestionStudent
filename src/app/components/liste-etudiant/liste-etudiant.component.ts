import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.scss']
})
export class ListeEtudiantComponent implements OnInit {

  @Input() public students;
  constructor() { }

  ngOnInit(): void {
  }

}
