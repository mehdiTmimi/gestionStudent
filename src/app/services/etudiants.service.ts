import { Injectable } from '@angular/core';
import { Student } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  public students;
  constructor() {
    this.students=[new Student('cd234234','tmimi','mehdi','04-06-1992'),
    new Student('cd2344444','alaoui','fatima','05-08-1998'),
    new Student('er2345235','filali','mehdi','04-06-1992'),
    new Student('tr2342434','slaoui','ghita','05-08-1998'),
    new Student('ca2423523','berrada','sarah','04-06-1991'),
    new Student('c234523525','bennani','alae','04-08-1994')]
   }
}
