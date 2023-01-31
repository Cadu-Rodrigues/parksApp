import { Component, Input, OnInit } from '@angular/core';
import { Park } from 'src/app/models/Park';

enum Field {
  code = 'code',
  distance = 'distance',
}
@Component({
  selector: 'app-show-parks',
  templateUrl: './show-parks.component.html',
  styleUrls: ['./show-parks.component.scss'],
})
export class ShowParksComponent implements OnInit {
  @Input() parks: Park[] = [];
  constructor() { }

  ngOnInit() {}
  orderBy(field: Event) {
    const element = field.currentTarget as HTMLInputElement;
    const value = element.value;
    let fieldEnum: Field = value as Field;
    if (fieldEnum == Field.distance) {
      this.parks.sort((a, b) => {
        return a.distance -b.distance;
      });
    }else{
      this.parks.sort((a, b) => {
        return parseInt(a.code) - parseInt(b.code);
      });
    }
  }
}
