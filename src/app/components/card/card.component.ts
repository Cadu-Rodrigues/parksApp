import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Park } from '../../models/Park';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() park: Park = {
    id: '',
    address: '',
    code: '',
    discount: 0,
    distance: 0,
    latitude: 0,
    longitude: 0,
    name: '',
  };
  @Input() color: string = "dark";
  currentPlatform: Platform;
  constructor(private platform: Platform) {
    this.currentPlatform = platform;
   }

  ngOnInit() {}
  openMap(park: Park) {
    let destination = park.latitude + ',' + park.longitude;
    if (this.platform.is('ios')) {
      window.open('maps://?q=' + destination, '_system');
    } else {
      let label = encodeURI('My Label');
      window.open(
        'https://www.google.com/maps/search/?api=1&query=' + destination
      );
      //window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    }
  }
}
