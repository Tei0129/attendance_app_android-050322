import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ViewNotesPage } from './view-notes.page';
describe('ViewNotesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewNotesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ViewNotesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=view-notes.page.spec.js.map