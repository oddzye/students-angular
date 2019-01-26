import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../students'; 
@Component({
  selector: 'app-students-table-row',
  templateUrl: './students-table-row.component.html',
  styleUrls: ['./students-table-row.component.sass']
})
export class StudentsTableRowComponent implements OnInit {
    students: any[] = STUDENTS;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
