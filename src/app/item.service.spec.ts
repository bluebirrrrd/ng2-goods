/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemService } from './item.service';
import { Item } from './item';

import { mockItems } from './items.mock';

const ITEMS_KEY = 'ng2-goods';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService]
    });
  });

  afterEach(() => {
      localStorage.setItem(ITEMS_KEY, '');
  });

  it('should exist', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));

  it('should fill with mock data', inject([ItemService], (service: ItemService) => {
      let expectedItems = JSON.stringify(mockItems);
      service.fillWithMockData();

      expect(localStorage.getItem(ITEMS_KEY)).toEqual(expectedItems);
  }));

  it('should save items', inject([ItemService], (service: ItemService) => {
      let expectedItems = JSON.stringify(mockItems);
      service.saveItems(mockItems);

      expect(localStorage.getItem(ITEMS_KEY)).toEqual(expectedItems);
  }));

  it('should update item', inject([ItemService], (service: ItemService) => {
      let updatedItem, result;
      localStorage.setItem(ITEMS_KEY, JSON.stringify(mockItems));

      updatedItem = mockItems[2];
      updatedItem.name = 'Sprite';

      service.updateItem(updatedItem);
      result = JSON.parse(localStorage.getItem(ITEMS_KEY))[2];

      expect(result.name).toEqual(updatedItem.name);
  }));

  it('should save new item', inject([ItemService], (service: ItemService) => {
      let newItem = new Item(0, 'Schweppes', 'The tonic for your gin');
      service.createItem(newItem);

      let result = JSON.parse(localStorage.getItem(ITEMS_KEY)).pop();

      expect(result.name).toEqual(newItem.name);
  }));

  it('should remove an item', inject([ItemService], (service: itemService) => {
      localStorage.setItem(ITEMS_KEY, JSON.stringify(mockItems));

      let itemId = mockItems[2].id;
      service.deleteItem(itemId);

      let resultItems = JSON.parse(localStorage.getItem(ITEMS_KEY));
      expect(resultItems.some(item => item.id === itemId)).toBeFalsy();
  }));
});
