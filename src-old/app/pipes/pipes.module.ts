import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-format/date-format.pipe';
import { SafePipe } from './safe/safe.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule } from 'ion2-calendar';
import { UserSearchPipe } from './user-search.pipe';

@NgModule({
	declarations: [DateFormatPipe,
    SafePipe,
    UserSearchPipe],
	imports: [],
	exports: [DateFormatPipe,
    SafePipe,
    CalendarModule,
    TranslateModule] 
})
export class PipesModule {}

