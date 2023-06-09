import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTeacherPageRoutingModule } from './add-teacher-routing.module';

import { AddTeacherPage } from './add-teacher.page';
import { PipesModule } from '../pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    AddTeacherPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [AddTeacherPage]
})
export class AddTeacherPageModule {}
