import { Component, Input, OnInit } from '@angular/core';
import { Park } from 'src/app/models/Park';

@Component({
  selector: 'app-search-park',
  templateUrl: './search-park.component.html',
  styleUrls: ['./search-park.component.scss'],
})
export class SearchParkComponent implements OnInit {
  @Input() parks: Park[] = [];
  park: Park;
  searchValue: string = '';
  constructor() {
    this.park = {
      id: '',
      address: '',
      code: '',
      discount: 0,
      distance: 0,
      latitude: 0,
      longitude: 0,
      name: '',
    };
   }

  ngOnInit() {}
  search() {
    let parkSearched = this.parks.find((park) => {
      return park.id == this.searchValue || park.code == this.searchValue;
    });
    if (parkSearched) this.park = parkSearched;
  }
}
