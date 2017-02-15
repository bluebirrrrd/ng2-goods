import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemTableComponent } from './item-table/item-table.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { AppRoutingModule } from './app-routing.module';

import { ItemService } from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemTableComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
      ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
