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

     localStorage.setItem(ITEMS_KEY, JSON.stringify(mockItems));
  });

  afterEach(() => {
      localStorage.setItem(ITEMS_KEY, '');
  });

  it('should exist', inject([ItemService], (service: ItemService) => {
      expect(service).toBeTruthy();
  }));

  it('should get all items', inject([ItemService], (service: ItemService) => {
      let mockStringifiedItems = JSON.stringify(mockItems);

      service.getItems().then(j => JSON.stringify(j)).then(res => {
          expect(res).toEqual(mockStringifiedItems);
      });
  }));

  it('should get one item', inject([ItemService], (service: ItemService) => {
      service.getItem(2).then(j => JSON.stringify(j)).then(res => {
          expect(res).toEqual(JSON.stringify(mockItems[1]));
      })
  }));

  it('should update item', inject([ItemService], (service: ItemService) => {
      let updatedItem, result;

      updatedItem = mockItems[2];
      updatedItem.name = 'Sprite';

      service.updateItem(updatedItem).then(() => {
          result = JSON.parse(localStorage.getItem(ITEMS_KEY))[2];
          expect(result.name).toEqual(updatedItem.name);
      });
  }));

  it('should remove an item', inject([ItemService], (service: itemService) => {
      let itemId = mockItems[2].id;
      service.deleteItem(itemId).then(() => {
          let resultItems = JSON.parse(localStorage.getItem(ITEMS_KEY));

          expect(resultItems.some(item => item.id === itemId)).toBeFalsy();
      });
  }));

  it('should save new item', inject([ItemService], (service: ItemService) => {
      let newItem = new Item(0, 'Schweppes', 'The tonic for your gin');

      service.saveNewItem(newItem).then(() => {
          let result = JSON.parse(localStorage.getItem(ITEMS_KEY)).pop();
          expect(result.name).toEqual(newItem.name);
      });
  }));


  it('should save items', inject([ItemService], (service: ItemService, done) => {
      let expectedItems = JSON.stringify(mockItems);
      service.saveItems(mockItems).then(() => {
          console.log(localStorage.getItem(ITEMS_KEY));
          expect(localStorage.getItem(ITEMS_KEY)).toEqual(expectedItems);
      }).finally(done);
  }));

  it('should fill with mock data', inject([ItemService], (service: ItemService) => {
      let expectedItems = JSON.stringify(mockItems);
      service.fillWithMockData();

      expect(localStorage.getItem(ITEMS_KEY)).toEqual(expectedItems);
  }));
});
