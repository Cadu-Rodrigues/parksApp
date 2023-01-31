import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchParkComponent } from 'src/app/components/search-park/search-park.component';
import { ShowParksComponent } from 'src/app/components/show-parks/show-parks.component';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../../services/firebase.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage,SearchParkComponent,ShowParksComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule,FormsModule],
      providers: [
        FirebaseService,
        AngularFireAuthModule,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
