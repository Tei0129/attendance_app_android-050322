import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNotesPageRoutingModule } from './view-notes-routing.module';

import { ViewNotesPage } from './view-notes.page';
import { PipesModule } from '../pipes/pipes.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { NoteCalendarPageModule } from '../note-calendar/note-calendar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewNotesPageRoutingModule,
    PipesModule,
    NgCalendarModule,
    NoteCalendarPageModule
    
  ],
  declarations: [ViewNotesPage]
})
export class ViewNotesPageModule {}
