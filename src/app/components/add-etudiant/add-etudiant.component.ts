import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent implements OnInit {

  public cneInput:FormControl;
  public nomInput:FormControl;
  public prenomInput:FormControl;
  public dateNaissanceInput:FormControl;

  public form:FormGroup;
  constructor(private service:EtudiantsService) { 
    this.cneInput=new FormControl('',[Validators.required,
      Validators.minLength(10),Validators.maxLength(10)]);
    this.nomInput=new FormControl('',[Validators.required,Validators.minLength(3)]);
    this.prenomInput=new FormControl('',[Validators.required,Validators.minLength(3)]);
    this.dateNaissanceInput=new FormControl('',Validators.required);
    this.form=new FormGroup({
      cne:this.cneInput,
      nom:this.nomInput,
      prenom:this.prenomInput,
      dateNaissance:this.dateNaissanceInput
    })
  }
  ngOnInit(): void {
   
  }
  public teste(){
    console.log(this.cneInput)
  }
  public onAjouter():void{
    let etudiant:Student;
    etudiant=new Student(this.form.controls['cne'].value,this.nomInput.value,
      this.prenomInput.value,this.dateNaissanceInput.value);
    this.service.students.push(etudiant);
  }
}
