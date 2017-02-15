import { Component, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

import { Item } from '../item';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  item: Item;

  @ViewChild('lgModal') public childModal:ModalDirective;
  @Output() onDelete = new EventEmitter<number>();

  ngAfterViewInit() {
      this.childModal;
  }
  showModal(item):void {
      this.item = item;
      this.childModal.show();
  }

  delete(itemId):void {
      this.onDelete.emit(itemId);
      this.childModal.hide();
  }
}
