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

  public getRooms() {
    return this.hotelRooms;
  }

  // addRoom(
  //   number: HTMLInputElement,
  //   size: HTMLInputElement,
  //   price: HTMLInputElement
  // ): void {
  //   const newRoom = new HotelRoom(
  //     parseInt(number.value),
  //     parseFloat(size.value),
  //     parseFloat(price.value)
  //   );

  //   number.value = '';
  //   size.value = '';
  //   price.value = '';

  //   this.hotelRooms.push(newRoom);
  // }

  addRoom(room: HotelRoom): void {
    this.hotelRooms.unshift(new HotelRoom(room.number, room.size, room.price));
  }

  shuffleRooms(): void {
    for (var i = this.hotelRooms.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.hotelRooms[i];
      this.hotelRooms[i] = this.hotelRooms[j];
      this.hotelRooms[j] = temp;
    }
  }

  public deleteRoom(room: HotelRoom) {
    this.hotelRooms = this.hotelRooms.filter((item) => {
      return item.number !== room.number;
    });

    const form = document.querySelector('.form.change-room-form');

    form && form.classList.remove('active');
  }

  public setUpdateFormValues(room: HotelRoom) {
    const form = document.querySelector('.form.change-room-form');
    const roomNumber = document.getElementById('room-number');

    (<HTMLInputElement>document.getElementById('numberToChange')).value =
      room.number.toString();
    (<HTMLInputElement>document.getElementById('update-size')).value =
      room.size.toString();
    (<HTMLInputElement>document.getElementById('update-price')).value =
      room.price.toString();

    if (roomNumber) {
      roomNumber.textContent = ` #${room.number}`;
    }

    form && form.classList.add('active');
  }

  public updateRoomHandler(
    number: HTMLInputElement,
    size: HTMLInputElement,
    price: HTMLInputElement
  ) {
    const form = document.querySelector('.form.change-room-form');
    const num = parseInt(number.value);

    const foundRoomIndex = this.hotelRooms.findIndex((el) => el.number === num);

    this.hotelRooms[foundRoomIndex].price = parseFloat(price.value);
    this.hotelRooms[foundRoomIndex].size = parseFloat(size.value);

    form && form.classList.remove('active');
  }
}
