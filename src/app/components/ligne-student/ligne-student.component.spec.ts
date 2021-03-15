import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneStudentComponent } from './ligne-student.component';

describe('LigneStudentComponent', () => {
  let component: LigneStudentComponent;
  let fixture: ComponentFixture<LigneStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
