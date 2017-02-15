import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css'],
  providers: [ItemService]
})
export class ItemTableComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  goods: Item[];

  ngOnInit() {
      this.getItems();
  }

  fillWithMockData(): void {
      this.itemService.fillWithMockData();
      this.getItems();
  }

  getItems(): void {
      this.goods = this.itemService.getItems();
  }

  deleteItem(itemId) {
      this.itemService.deleteItem(itemId);
      this.getItems();
  }

}
