import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item: Item;

  constructor() {
      this.item = new Item();
  }

  ngOnInit() {
      /* if we're editing existing item, retrieve the data from LocalStorage */
  }


}
