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
  public getBgColor(index):String
  {
    console.log(index);
    if (index%2==0)
    return 'lightgray';
    return 'white'
  }

}
