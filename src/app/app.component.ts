import { Component } from '@angular/core';
import { HotelRoom } from './components/hotel-room/hotel-room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MetHotels';
  hotelRooms: HotelRoom[];
  searchText = '';

  constructor() {
    this.hotelRooms = [
      new HotelRoom(1, 54, 350),
      new HotelRoom(2, 35, 250),
      new HotelRoom(3, 90, 650),
      new HotelRoom(4, 120, 900),
      new HotelRoom(5, 75, 500),
    ];
  }

  addRoom(
    number: HTMLInputElement,
    size: HTMLInputElement,
    price: HTMLInputElement
  ): void {
    const newRoom = new HotelRoom(
      parseInt(number.value),
      parseFloat(size.value),
      parseFloat(price.value)
    );

    number.value = '';
    size.value = '';
    price.value = '';

    this.hotelRooms.push(newRoom);
  }

  shuffleRooms(): void {
    for (var i = this.hotelRooms.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.hotelRooms[i];
      this.hotelRooms[i] = this.hotelRooms[j];
      this.hotelRooms[j] = temp;
    }
  }
}
