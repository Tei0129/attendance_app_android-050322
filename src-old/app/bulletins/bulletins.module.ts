import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulletinsPageRoutingModule } from './bulletins-routing.module';
import { BulletinsPage } from './bulletins.page';
import { PipesModule } from '../pipes/pipes.module';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulletinsPageRoutingModule,
    PipesModule
  ],
  declarations: [BulletinsPage],
  providers:[Camera]
})
export class BulletinsPageModule {}
