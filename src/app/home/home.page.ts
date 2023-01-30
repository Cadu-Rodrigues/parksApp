import { Component } from '@angular/core';
import { APIResponse } from '../models/APIResponse';
import { Park } from '../models/Park';
import { ParksService } from '../services/parks.service';
import { Platform } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { tick } from '@angular/core/testing';

enum Field {
  code = 'code',
  distance = 'distance',
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  parks: Park[] = [];
  currentPlatform: Platform;
  park: Park;
  searchValue: string = '';
  constructor(
    private service: ParksService,
    private platform: Platform,
    private authService: FirebaseService
  ) {
    this.currentPlatform = platform;
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
  ngOnInit() {
    this.service.getParks().subscribe((res: APIResponse) => {
      res.data.forEach(async (park) => {
        this.parks.push({
          id: park.id,
          address: park.full,
          code: park.code,
          discount: park.discount.percentage,
          distance: await this.service.calculateDistance(park),
          latitude: parseFloat(park.lat),
          longitude: parseFloat(park.lng),
          name: park.name,
        });
      });
    });
  }
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
  search() {
    let parkSearched = this.parks.find((park) => {
      return park.id == this.searchValue || park.code == this.searchValue;
    });
    console.log(parkSearched);
    if (parkSearched) this.park = parkSearched;
  }
  logout() {
    this.authService.SignOut();
  }
  orderBy(field: string) {
    let fieldEnum: Field = field as Field;
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
