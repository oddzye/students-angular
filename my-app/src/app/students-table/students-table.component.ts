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
  inputValue: string;
  firstDate: string = "1900-12-25";
  secondDate: string = "2019-12-25";
  firstScore: string = "1";
  secondScore: string = "5";
  showPopup: boolean = false; 

  selectionChange(input: HTMLInputElement) {
    input.checked === true
      ? this.isChecked = true
      : this.isChecked = false;
}

onSearchChange(searchValue : string ) {  
  this.inputValue = searchValue.toUpperCase();
  console.log(this.inputValue);
}

bubbleSort = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j].surname > arr[j + 1].surname) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  return arr;
};

private toggleOpen():void {
  this.showPopup = true;
};

bubbleSortName = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j].name > arr[j + 1].name) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  return arr;
};

bubbleSortScore = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j].score > arr[j + 1].score) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  return arr;
};

surnameSort():void {
  this.bubbleSort(this.students);
}

nameSort():void {
  this.bubbleSortName(this.students);
}

scoreSort():void {
  this.bubbleSortScore(this.students);
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
  if (studentScore >= Number(this.firstScore) && studentScore <= Number(this.secondScore)) return false;
  return true;
}

convertToFormat (date: string): string {
  const dateWithoutDots = date.replace(/\./g, ""); 
  const day: string = `${dateWithoutDots[0]}${dateWithoutDots[1]}`;
  const month: string = `${dateWithoutDots[2]}${dateWithoutDots[3]}`;
  const year: string = `${dateWithoutDots[4]}${dateWithoutDots[5]}${dateWithoutDots[6]}${dateWithoutDots[7]}`;
  return `${year}-${month}-${day}`;
}

filterByDate(studentDateInStr: string): boolean {
  const studentDate: Date = new Date(this.convertToFormat(studentDateInStr));
  const studentDateValue: number = studentDate.getTime();
  const startDate: number = new Date(this.firstDate).getTime();
  const lastDate: number = new Date(this.secondDate).getTime();
  if (studentDateValue >= startDate && studentDateValue <= lastDate) return false;
  return true;
}

private ClosePopup() {
  this.showPopup = false;
}
constructor() { }
  
ngOnInit() {
  }

}
