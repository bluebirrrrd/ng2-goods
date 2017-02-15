import { Injectable } from '@angular/core';
import { Item } from './item';
import { mockItems } from './items.mock';

const ITEMS_KEY = 'ng2-goods';

@Injectable()
export class ItemService {

    constructor() { }

    getItems(): Promise<Item[]> {
        let items: Item[];
        try {
            const unparsedItems = localStorage.getItem(ITEMS_KEY);
            items = unparsedItems ? JSON.parse(unparsedItems) : [];
        } catch (e) {
            items = [];
        }
        return Promise.resolve(items);
    }

    getItem(itemId: number): Promise<Item> {
        return this.getItems().then(items =>
            Promise.resolve(items.find(item => item.id === itemId))
        );
    }

    saveItems(items: Item[]): Promise<any> {
            localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
            return Promise.resolve();
    }

    updateItem(item: Item): Promise<any> {
        return this.getItems().then(items => {
            items.some((currItem, index, arr) => {
                if (currItem.id !== item.id) {
                    return false;
                }

                arr[index] = item;
                return true;
            });
            return this.saveItems(items);
        });
    }

    saveNewItem(item: Item): Promise<any> {
        item.id = Math.round(Math.random() * Date.now());
        return this.getItems().then(items => {
            items.push(item);
            return this.saveItems(items);
        });
    }

    deleteItem(itemId: number): Promise<any> {
        return this.getItems().then(items => {
            items.some((item, index, arr) => {
                if (item.id === itemId) {
                    arr.splice(index, 1);
                    return true;
                }
            });
            return this.saveItems(items);
        });
    }

    fillWithMockData(): Promise<any> {
        localStorage.setItem(ITEMS_KEY, JSON.stringify(mockItems));
        return Promise.resolve();
    }

}
