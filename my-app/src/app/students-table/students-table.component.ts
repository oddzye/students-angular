import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../students'; 
@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.sass']
})
export class StudentsTableComponent implements OnInit {
  students: any[] = STUDENTS;
  isChecked: boolean = false;
  selectionChange(input: HTMLInputElement) {
    console.log(input);
    input.checked === true
      ? this.isChecked = true
      : this.isChecked = false;
}

  constructor() { }
  
  ngOnInit() {
  }

}
