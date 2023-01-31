import { TestBed } from '@angular/core/testing';

import { ParksService } from './parks.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ParkResponse } from '../models/ParkResponse';

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
      lat: '',
      lng: '',
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
        dayOfWeek: 0
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
        updatedAt: ''
      },
      parkingFeature: {
        id: '',
        parkId: '',
        softwareType: '',
        physicalParking: '',
        rainProtection: '',
        createdAt: '',
        updatedAt: ''
      }
    };
    let distance = service.calculateDistance(park);
  });
});
