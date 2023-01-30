import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/APIResponse';
import { Geolocation } from '@capacitor/geolocation';
import { ParkResponse } from '../models/ParkResponse';

@Injectable({
  providedIn: 'root',
})
export class ParksService {
  constructor(private http: HttpClient) {}
  getParks(): Observable<APIResponse> {
    let headers = new HttpHeaders();
    headers = headers.set('app-version', '1.0');
    const options = { headers };
    return this.http.get<APIResponse>(environment.APILink, options);
  }
  async calculateDistance(park: ParkResponse): Promise<number> {
    const coordinates = await Geolocation.getCurrentPosition();
    return this.getDistanceInKm(
      coordinates.coords.latitude,
      coordinates.coords.longitude,
      parseFloat(park.lat),
      parseFloat(park.lng)
    );
  }
  getDistanceInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }
}
