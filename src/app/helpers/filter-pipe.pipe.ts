import { Pipe, PipeTransform } from '@angular/core';
import { HotelRoom } from '../components/hotel-room/hotel-room.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(items: HotelRoom[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    const searchNum = parseInt(searchText);
    console.log(searchNum);
    console.log(items);
    return items.filter((el) => el.price <= parseInt(searchText));
  }
}
