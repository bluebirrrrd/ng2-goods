import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Item } from '../item/item';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item: Item;
  saved: boolean = false;

  constructor(
      private itemService: ItemService,
      private route: ActivatedRoute,
      private location: Location) {
  }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                if(params['id'] !== 'new') {
                    return this.itemService.getItem(+params['id']);
                }
                return Promise.resolve(new Item(0, '', ''));
            })
            .subscribe((item: Item) => this.item = item);
    }



    onSubmit() {
        ((this.item.id === 0) ? this.itemService.saveNewItem(this.item) :
            this.itemService.updateItem(this.item)).then(() => {
                this.saved = true;
            });
    }

    onChange() {
        this.saved = false;
    }


}
