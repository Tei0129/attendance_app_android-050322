import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddParentPageRoutingModule } from './add-parent-routing.module';

import { AddParentPage } from './add-parent.page';
import { PipesModule } from '../pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddParentPageRoutingModule,
    PipesModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [AddParentPage],

})
export class AddParentPageModule {}
