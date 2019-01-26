import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTableRowComponent } from './students-table-row.component';

describe('StudentsTableRowComponent', () => {
  let component: StudentsTableRowComponent;
  let fixture: ComponentFixture<StudentsTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
