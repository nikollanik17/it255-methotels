import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { HotelRoom } from './hotel-room.model';

@Component({
  selector: 'app-hotel-room',
  templateUrl: './hotel-room.component.html',
  styleUrls: ['./hotel-room.component.scss'],
})
export class HotelRoomComponent implements OnInit {
  @Output() roomToDelete: EventEmitter<HotelRoom>;
  @Output() updateRoom: EventEmitter<HotelRoom>;
  @Input() hotelRoom: HotelRoom;

  constructor(private _roomService: RoomService) {
    this.roomToDelete = new EventEmitter();
    this.updateRoom = new EventEmitter();
  }

  ngOnInit(): void {}

  public getPrice(numberOfNights: HTMLInputElement) {
    if (numberOfNights.value === '') {
      return;
    }

    const priceTotal = this._roomService.getPrice(
      parseInt(numberOfNights.value),
      this.hotelRoom
    );

    const priceHtml = document.querySelector(
      `.price-calculator.calc-${this.hotelRoom.number} .calculated-price`
    );

    if (priceHtml) {
      priceHtml.textContent = `${priceTotal}$`;
    }
  }

  public openCalculator() {
    const calculator = document.querySelector(
      `.price-calculator.calc-${this.hotelRoom.number}`
    );
    calculator?.classList.add('active');
  }

  public closeCalculator() {
    const calculator = document.querySelector(
      `.price-calculator.calc-${this.hotelRoom.number}`
    );
    calculator?.classList.remove('active');
  }

  public deleteRoom(): void {
    this.roomToDelete.emit(this.hotelRoom);
  }

  public changeRoom(): void {
    this.updateRoom.emit(this.hotelRoom);
  }
}
