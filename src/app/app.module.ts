import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelRoomComponent } from './components/hotel-room/hotel-room.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { RoomService } from './services/room.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelRoomComponent,
    FilterPipePipe,
    AddRoomComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
