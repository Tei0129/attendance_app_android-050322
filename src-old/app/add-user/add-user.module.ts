import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserPageRoutingModule } from './add-user-routing.module';

import { AddUserPage } from './add-user.page';
import { PipesModule } from '../pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    AddUserPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [AddUserPage]
})
export class AddUserPageModule {}
