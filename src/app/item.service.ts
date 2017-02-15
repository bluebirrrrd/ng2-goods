import { Injectable } from '@angular/core';
import { Item } from './item';
import { mockItems } from './items.mock';

const ITEMS_KEY = 'ng2-goods';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Item[] {
      let allItems: Item[];
      try {
          const items = localStorage.getItem(ITEMS_KEY);
          allItems = items ? JSON.parse(items) : [];
      } catch (e) {
          allItems = [];
      }
      return allItems;
  }

  saveItems(items: Item[]): void {
      localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
  }

  updateItem(item: Item): void {
      let items = this.getItems();

      items.some((currItem, index, arr) => {
          if (currItem.id !== item.id) {
              return false;
          }

          arr[index] = item;
          return true;
      });

      this.saveItems(items);
  }

  createItem(item: Item): void {
      let items = this.getItems();
      items.push(item);
      this.saveItems(items);
  }

  deleteItem(itemId: number): void {
      let items = this.getItems();
      items.some((item, index, arr) => {
          if (item.id === itemId) {
              arr.splice(index, 1);
              return true;
          }
      });
      this.saveItems(items);
  }

  fillWithMockData() {
      localStorage.setItem(ITEMS_KEY, JSON.stringify(mockItems));
  }

}
