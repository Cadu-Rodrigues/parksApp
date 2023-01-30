import { Component } from '@angular/core';
import { APIResponse } from '../models/APIResponse';
import { Park } from '../models/Park';
import { ParksService } from '../services/parks.service';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  parks: Park[] = [];
  currentPlatform: Platform;
  constructor(private service: ParksService,private platform: Platform) {
    this.currentPlatform = platform;
  }
  ngOnInit() {
    this.service.getParks().subscribe((res: APIResponse) => {
      res.data.forEach(async(park) => {
        this.parks.push({
          id:park.id,
          address:park.full,
          code:park.code,
          discount:park.discount.percentage,
          distance: await this.service.calculateDistance(park),
          latitude: parseFloat(park.lat),
          longitude: parseFloat(park.lng),
          name:park.name,
        });
      });
    });
  }
  openMap(park: Park){
    let destination = park.latitude + ',' + park.longitude;
      if(this.platform.is('ios')){
        window.open('maps://?q=' + destination, '_system');
      } else {
        let label = encodeURI('My Label');
        window.open('https://www.google.com/maps/search/?api=1&query='+destination);
        //window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
      }
  }
  logout() {
    this.authService.SignOut();
  }
}
