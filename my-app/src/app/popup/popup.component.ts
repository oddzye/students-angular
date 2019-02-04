import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {
  @Output() onClose = new EventEmitter();

  form: FormGroup;


  constructor() { }

  close() {
    this.onClose.emit();
  }

  onAddStudent(event) {
    console.log("event", event);
    // event.preventDefault();
    this.onClose.emit();
    console.log("on form submited", this.form);
  }
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
      surname: new FormControl(""),
      patronymic: new FormControl(""),
      age: new FormControl(""),
      date: new FormControl("")

    })
  }

}
