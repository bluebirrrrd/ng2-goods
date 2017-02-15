import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item/item';
import { ItemService } from '../item/item.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css'],
  providers: [ItemService]
})
export class ItemTableComponent implements OnInit {

  constructor(
      private router: Router,
      private itemService: ItemService) { }

  @ViewChild(ModalComponent) modal: ModalComponent;
  goods: Item[];

  ngOnInit() {
      this.getItems();
  }

  fillWithMockData(): void {
      this.itemService.fillWithMockData().then(() => {
          this.getItems();
      });
  }

  getItems(): void {
      this.itemService.getItems().then((res) => {
          this.goods = res;
      });
  }

  deleteItem(itemId: number) {
      this.itemService.deleteItem(itemId).then(() => {
          this.getItems();
      });
  }

  goToEdit(itemId:number) {
      this.router.navigate(['/goods', itemId]);
  }

}
