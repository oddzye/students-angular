import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../students'; 
import { last } from '@angular/router/src/utils/collection';
import { start } from 'repl';
@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.sass']
})

export class StudentsTableComponent implements OnInit {
  students: any[] = STUDENTS;
  isChecked: boolean = false;
  inputValue: string;
  firstDate: string = "1900-12-25";
  secondDate: string = "2019-12-25";
  firstScore: string = "1";
  secondScore: string = "5";

  selectionChange(input: HTMLInputElement) {
    input.checked === true
      ? this.isChecked = true
      : this.isChecked = false;
}

onSearchChange(searchValue : string ) {  
  this.inputValue = searchValue.toUpperCase();
  console.log(this.inputValue);
}

removeRow(index: number): void {
  this.students.splice(index, 1);
}
onInputDateFirstChange(searchValue: string) {
  this.firstDate = searchValue;
  console.log(new Date(this.firstDate).getTime());
  console.log(this.firstDate);
}

onChangeFirstScore(inputValue: string): void {
  this.firstScore = inputValue;
}

onChangeSecondScore(inputValue: string): void {
  this.secondScore = inputValue;
}

onInputDateSecondChange(searchValue: string) {
  this.secondDate = searchValue;
  console.log(this.secondDate);
}

filterByScore(studentScore: number): boolean {
  console.log(this.firstScore);
  console.log(this.secondScore);
  console.log(studentScore)
  if (studentScore >= Number(this.firstScore) && studentScore <= Number(this.secondScore)) return false;
  return true;
}

convertToFormat (date: string): string {
  const dateWithoutDots = date.replace(/\./g, ""); 
  console.log(dateWithoutDots);
  const day: string = `${dateWithoutDots[0]}${dateWithoutDots[1]}`;
  console.log("day", day);
  const month: string = `${dateWithoutDots[2]}${dateWithoutDots[3]}`;
  console.log("month", month);
  const year: string = `${dateWithoutDots[4]}${dateWithoutDots[5]}${dateWithoutDots[6]}${dateWithoutDots[7]}`;
  console.log("year", year);
  return `${year}-${month}-${day}`;
}
filterByDate(studentDateInStr: string): boolean {
  const studentDate: Date = new Date(this.convertToFormat(studentDateInStr));
  console.log("STUDENT DATE", this.convertToFormat(studentDateInStr));
  const studentDateValue: number = studentDate.getTime();
  const startDate: number = new Date(this.firstDate).getTime();
  const lastDate: number = new Date(this.secondDate).getTime();
  console.log("first Date", startDate);
  console.log("student date", studentDateValue)
  console.log("last Date", lastDate);
  if (studentDateValue >= startDate && studentDateValue <= lastDate) return false;
  return true;
}
constructor() { }
  
ngOnInit() {
  }

}
