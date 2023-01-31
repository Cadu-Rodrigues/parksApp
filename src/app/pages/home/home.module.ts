import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardComponent } from '../../components/card/card.component';
import { SearchParkComponent } from '../../components/search-park/search-park.component';
import { ShowParksComponent } from '../../components/show-parks/show-parks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePage,
    CardComponent,
    SearchParkComponent,
    ShowParksComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HomePageRoutingModule,
    IonicModule.forRoot(),
  ],
})
export class HomePageModule {}
