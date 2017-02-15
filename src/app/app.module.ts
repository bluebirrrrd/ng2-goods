import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ng2-bootstrap/modal';

import { AppComponent } from './app.component';
import { ItemTableComponent } from './item-table/item-table.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { AppRoutingModule } from './app-routing.module';

import { ItemService } from './item.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTableComponent,
    ItemEditComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
      ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
