import { Component } from '@angular/core';
import { APIResponse } from '../../models/APIResponse';
import { Park } from '../../models/Park';
import { ParksService } from '../../services/parks.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  parks: Park[] = [];
  constructor(
    private service: ParksService,
    private authService: FirebaseService
  ) {
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
  logout() {
    this.authService.signOut();
  }
}
