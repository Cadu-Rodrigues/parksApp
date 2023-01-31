import { TestBed } from '@angular/core/testing';

import { ParksService } from './parks.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ParkResponse } from '../models/ParkResponse';
import { Position } from '@capacitor/geolocation';

describe('ParksService', () => {
  let service: ParksService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ParksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should calculate distance in KM', async () => {
    let distance = service.getDistanceInKm(
      -23.544549449909198,
      -46.57202408851278,
      -23.535648788693052,
      -46.56669813637155
    );
    expect(distance).toBeGreaterThan(1.1);
    expect(distance).toBeLessThan(1.2);
  });
  it('should calculate distance from location', async () => {
    let park: ParkResponse = {
      id: '',
      code: '',
      name: '',
      cnpj: '',
      description: '',
      zipCode: '',
      street: '',
      full: '',
      city: '',
      county: '',
      state: '',
      country: '',
      lat: '-23.535648788693052',
      lng: '-46.56669813637155',
      orgShortName: '',
      orgName: '',
      orgCnpj: '',
      orgAddress: '',
      email: '',
      phone: '',
      rolePerson: '',
      relationsManagerId: '',
      hubeesSpots: 0,
      businessHours: {
        end: 0,
        start: 0,
        enabled: false,
        dayOfWeek: 0,
      },
      partnerParkingId: '',
      showInTheMap: false,
      hubeesSubscriptionEnabled: false,
      singleStayPaymentEnabled: false,
      initialCreation: false,
      active: false,
      paymentDay: 0,
      createdAt: '',
      updatedAt: '',
      discount: {
        id: '',
        parkId: '',
        details: '',
        discountType: '',
        active: false,
        amount: '',
        percentage: 0,
        createdAt: '',
        updatedAt: '',
      },
      parkingFeature: {
        id: '',
        parkId: '',
        softwareType: '',
        physicalParking: '',
        rainProtection: '',
        createdAt: '',
        updatedAt: '',
      },
    };
    let coordinates: Position = {
      coords: {
        latitude: -23.544549449909198,
        longitude: -46.57202408851278,
        accuracy: 0,
        altitudeAccuracy: 0,
        altitude: 0,
        speed: 0,
        heading: 0,
      },
      timestamp: 0,
    };
    let spy = spyOn(service, 'getCoordinates').and.returnValue(
      Promise.resolve(coordinates)
    );
    await service.calculateDistance(park).then((distance) => {
      expect(distance).toBeGreaterThan(1.1);
      expect(distance).toBeLessThan(1.2);
    });
  });
  it('should convert deg to rad',()=>{
    let converted = service.deg2rad(1);
    expect(converted).toEqual(0.017453292519943295);
  })
});
