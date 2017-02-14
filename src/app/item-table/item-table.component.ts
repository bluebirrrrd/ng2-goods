import { Component, OnInit } from '@angular/core';
import { Item } from '../item-edit/item';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {

  constructor() { }

  goods: Item[];

  ngOnInit() {
      this.goods = [{
          id: 1,
          name: 'ASUS PX-2033',
          description: 'Awesome Wi-Fi router'
      }]
  }

}
