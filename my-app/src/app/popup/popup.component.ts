import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  constructor() { }
  close() {
    this.onClose.emit();
  }
  ngOnInit() {
    
  }

}
